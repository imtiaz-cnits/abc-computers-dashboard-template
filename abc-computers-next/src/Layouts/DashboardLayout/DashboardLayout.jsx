"use client";

import DashboardNavbar from "@/Components/Dashboard/DashboardNavbar/DashboardNavbar";
import DashboardSidebar from "@/Components/Dashboard/DashboardSidebar/DashboardSidebar";
import React, { useEffect } from "react";

const DashboardLayout = ({ children }) => {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");

    const script = document.createElement("script");
    script.src = "https://code.jquery.com/jquery-3.6.4.min.js";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      $(".menu > ul > li").click(function (e) {
        // Store the active parent link in localStorage
        const activeLink = $(this).find("> a").attr("href");
        localStorage.setItem("activeSidebarLink", activeLink);

        // Update active classes and toggle submenu
        $(this).siblings().removeClass("active");
        $(this).siblings().find("ul").slideUp(); // Close other submenus
        $(this).toggleClass("active");
        $(this).find("ul").slideToggle();
      });

      $(".menu > ul > li > a").click(function (e) {
        // Remove submenu active state when clicking a parent menu link
        localStorage.removeItem("activeSubmenuLink");
      });

      $(".menu > ul > li ul li a").click(function (e) {
        // Store the clicked submenu child link in localStorage
        const activeChildLink = $(this).attr("href");
        localStorage.setItem("activeSubmenuLink", activeChildLink);

        // Store parent link for submenu
        const parentLink = $(this)
          .closest("ul")
          .closest("li")
          .find("> a")
          .attr("href");
        localStorage.setItem("activeSidebarLink", parentLink);
      });

      // Highlight the active link and keep submenu open on page load
      $(document).ready(function () {
        const activeLink = localStorage.getItem("activeSidebarLink");
        const activeSubmenuLink = localStorage.getItem("activeSubmenuLink");

        if (activeSubmenuLink) {
          // Highlight the active submenu child link
          const activeSubElement = $(
            `.menu ul li a[href="${activeSubmenuLink}"]`
          ).parent();
          activeSubElement.addClass("active");

          // Open the parent menu of the active submenu
          const parentMenu = activeSubElement.closest("ul").closest("li");
          parentMenu.addClass("active");
          parentMenu.find("> ul").slideDown();
        } else if (activeLink) {
          // Highlight the parent menu link even if no submenu is active
          const activeElement = $(
            `.menu > ul > li > a[href="${activeLink}"]`
          ).parent();
          activeElement.addClass("active");
          activeElement.find("> ul").slideDown(); // Open submenu if it's a parent
        } else {
          // Ensure all menus are closed by default
          $(".menu > ul > li > ul").slideUp();
          $(".menu > ul > li").removeClass("active");
        }
      });

      // Close active submenu when clicking outside the menu......
      $(document).on("click", function (e) {
        // Check if body has data-sidebar-size="sm"
        if ($("body").attr("data-sidebar-size") === "sm") {
          // Check if the click is outside the sidebar (.menu)
          if (!$(e.target).closest(".menu").length) {
            // Close all submenus and remove active state
            $(".menu > ul > li").removeClass("active");
            $(".menu > ul > li > ul").slideUp();
            localStorage.removeItem("activeSidebarLink");
            localStorage.removeItem("activeSubmenuLink");
          }
        }
      });

      // Prevent closing when clicking inside the sidebar
      $(".menu").on("click", function (e) {
        e.stopPropagation();
      });

      // .............Table copy,csv,pdf,xlse,print all file Start...............//

      $(document).ready(function () {
        // Copy table to clipboard
        $("#copyBtn").click(function () {
          const range = document.createRange();
          range.selectNode(document.querySelector("table"));
          window.getSelection().removeAllRanges();
          window.getSelection().addRange(range);
          document.execCommand("copy");
          window.getSelection().removeAllRanges();
          alert("Table copied to clipboard!");
        });

        // Export table to CSV
        $("#csvBtn").click(function () {
          let csv = [];
          const rows = document.querySelectorAll("table tr");

          rows.forEach((row) => {
            const cols = row.querySelectorAll("td, th");
            let rowData = [];
            cols.forEach((col) => rowData.push(col.innerText));
            csv.push(rowData.join(","));
          });

          const csvFile = new Blob([csv.join("\n")], { type: "text/csv" });
          const downloadLink = document.createElement("a");
          downloadLink.download = "data.csv";
          downloadLink.href = window.URL.createObjectURL(csvFile);
          downloadLink.click();
        });

        // Export table to PDF
        $("#pdfBtn").click(function () {
          const { jsPDF } = window.jspdf;
          const doc = new jsPDF();

          // Add the table content to the PDF
          doc.autoTable({
            html: "table",
            startY: 10,
          });

          // Save the PDF
          doc.save("data.pdf");
        });

        // Export table to XLSX
        $("#xlsxBtn").click(function () {
          const wb = XLSX.utils.table_to_book(document.querySelector("table"));
          XLSX.writeFile(wb, "data.xlsx");
        });

        // Print table
        $("#printBtn").click(function () {
          window.print();
        });
      });
      // .............Table copy,csv,pdf,xlse,print all file End...............//
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <DashboardNavbar />
      <DashboardSidebar />
      {children}
    </>
  );
};

export default DashboardLayout;
