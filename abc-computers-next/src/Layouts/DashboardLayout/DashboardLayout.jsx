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

      // Sidebar Close on Outside Click
      document.addEventListener("click", function (event) {
        const sidebar = document.querySelector(".vertical-menu");
        const toggleButton = document.querySelector(".vertical-menu-btn");

        if (!sidebar.contains(event.target) && !toggleButton.contains(event.target)) {
          document.body.classList.remove("sidebar-enable");
        }
      });

      // Initialize Sidebar Active State on Page Load
      document.addEventListener("DOMContentLoaded", function () {
        setSidebarMenuActive();
      });

      // Responsive Sidebar Toggle
      function toggleSidebar() {
        const currentSize = document.body.getAttribute("data-sidebar-size");

        document.body.classList.toggle("sidebar-enable");
        if (window.innerWidth >= 992) {
          document.body.setAttribute(
            "data-sidebar-size",
            currentSize === "sm" ? "lg" : "sm"
          );
        }
      }
      document.querySelectorAll(".vertical-menu-btn").forEach((button) => {
        button.addEventListener("click", toggleSidebar);
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



      // Create Product modal to ADD Category Modal End................
      document.addEventListener("DOMContentLoaded", () => {
        const modal = document.querySelector(".newcategory");
        const openModalBtn = document.querySelector(".newcategory-open");
        const closeModalBtn = modal.querySelector(".newcategory-close");

        // Open Modal
        openModalBtn.addEventListener("click", () => {
          modal.classList.add("show");
        });

        // Close Modal
        closeModalBtn.addEventListener("click", () => {
          modal.classList.remove("show");
        });

        // Close Modal when clicking outside the modal content
        modal.addEventListener("click", (event) => {
          if (event.target === modal) {
            modal.classList.remove("show");
          }
        });
      });

      // Create Product modal to ADD Category Modal End................

      // Create Product modal to ADD Sub Category Modal End................
      document.addEventListener("DOMContentLoaded", () => {
        const categoryModal = document.querySelector(".subnewcategory");
        const openCategoryModalBtn = document.querySelector(".subnewcategory-open"); // Button to open the modal
        const closeCategoryModalBtn = categoryModal.querySelector(
          ".subnewcategory-close"
        );

        // Open Modal
        if (openCategoryModalBtn) {
          openCategoryModalBtn.addEventListener("click", () => {
            categoryModal.classList.add("show");
          });
        }

        // Close Modal
        closeCategoryModalBtn.addEventListener("click", () => {
          categoryModal.classList.remove("show");
        });

        // Close Modal when clicking outside the modal content
        categoryModal.addEventListener("click", (event) => {
          if (event.target === categoryModal) {
            categoryModal.classList.remove("show");
          }
        });
      });

      // Create Product modal to ADD sub Category Modal End................


      // Filter Select Search Box Js Start................................................................
      document.addEventListener("DOMContentLoaded", function () {
        const dropdowns = document.querySelectorAll(".select-box-dropdown");

        dropdowns.forEach(function (dropdown) {
          const dropdownSelected = dropdown.querySelector(
            ".select-dropdown-selected"
          );
          const dropdownItems = dropdown.querySelector(".select-dropdown-items");
          const searchBox = dropdown.querySelector(".select-search-box");
          const icon = dropdown.querySelector(".icon i");

          // Function to toggle visibility of search box based on number of items
          function toggleSearchInput() {
            const itemCount = dropdownItems.querySelectorAll(".option").length;
            if (itemCount >= 4) {
              searchBox.style.display = "block";
            } else {
              searchBox.style.display = "none";
            }
          }

          // Function to position the dropdown dynamically
          function positionDropdown() {
            const rect = dropdown.getBoundingClientRect(); // Get the position of the dropdown container
            const dropdownHeight = dropdownItems.offsetHeight;
            const spaceBelow = window.innerHeight - rect.bottom; // Space below the dropdown
            const spaceAbove = rect.top; // Space above the dropdown

            if (spaceBelow < dropdownHeight && spaceAbove > dropdownHeight) {
              // If not enough space below, position the dropdown above
              dropdownItems.style.bottom = `${rect.height}px`; // Place above, accounting for the selected height
              dropdownItems.style.top = "auto";
            } else {
              // Otherwise, position the dropdown below
              dropdownItems.style.top = "100%";
              dropdownItems.style.bottom = "auto";
            }
          }

          // Toggle dropdown visibility
          dropdownSelected.addEventListener("click", function (e) {
            e.stopPropagation();

            // Close all other dropdowns
            dropdowns.forEach(function (otherDropdown) {
              if (otherDropdown !== dropdown) {
                otherDropdown
                  .querySelector(".select-dropdown-items")
                  .classList.remove("show");
                otherDropdown
                  .querySelector(".icon i")
                  .classList.remove("fa-angle-up");
                otherDropdown.querySelector(".icon i").classList.add("fa-angle-down");
              }
            });

            // Toggle current dropdown visibility
            dropdownItems.classList.toggle("show");

            // Toggle icon rotation
            if (dropdownItems.classList.contains("show")) {
              icon.classList.remove("fa-angle-down");
              icon.classList.add("fa-angle-up");
            } else {
              icon.classList.remove("fa-angle-up");
              icon.classList.add("fa-angle-down");
            }

            // Call function to toggle search input visibility
            toggleSearchInput();

            // Position the dropdown based on available space
            if (dropdownItems.classList.contains("show")) {
              positionDropdown();
            }
          });

          // Filter dropdown items based on search
          searchBox.addEventListener("input", function () {
            const filter = searchBox.value.toLowerCase();
            const items = dropdownItems.querySelectorAll(".option");

            items.forEach(function (item) {
              const text = item.textContent.toLowerCase();
              if (text.includes(filter)) {
                item.style.display = "block";
              } else {
                item.style.display = "none";
              }
            });
          });

          // Close the dropdown if clicked outside
          document.addEventListener("click", function (e) {
            if (!e.target.closest(".select-box-dropdown")) {
              dropdownItems.classList.remove("show");
              icon.classList.remove("fa-angle-up");
              icon.classList.add("fa-angle-down");
              searchBox.style.display = "none";
            }
          });

          // Select dropdown item
          dropdownItems.addEventListener("click", function (e) {
            if (e.target.tagName === "OPTION") {
              dropdownSelected.querySelector("span").textContent =
                e.target.textContent;
              dropdownItems.classList.remove("show");
              icon.classList.remove("fa-angle-up");
              icon.classList.add("fa-angle-down");
              searchBox.style.display = "none";
            }
          });
        });
      });
      // Filter Select Search Box Js End........................................................
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
