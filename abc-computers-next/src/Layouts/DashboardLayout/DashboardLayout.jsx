"use client";

import DashboardNavbar from "@/Components/Dashboard/DashboardNavbar/DashboardNavbar";
import DashboardSidebar from "@/Components/Dashboard/DashboardSidebar/DashboardSidebar";
import React, { useEffect } from "react";
import { jsPDF } from "jspdf";

const DashboardLayout = ({ children }) => {
  useEffect(() => {

    const script = document.createElement("script");
    script.src = "https://code.jquery.com/jquery-3.6.4.min.js";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {

      // Sidebar Close on Outside Click
      document.addEventListener("click", function (event) {
        const sidebar = document.querySelector(".vertical-menu");
        const toggleButton = document.querySelector(".vertical-menu-btn");

        if (
          !sidebar.contains(event.target) &&
          !toggleButton.contains(event.target)
        ) {
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
          const { jsPDF } = window?.jspdf;
          const doc = new jsPDF();

          if (doc.autoTable) {
            // Add the table content to the PDF
            doc.autoTable({
              html: "table",
              startY: 10,
            });

            // Save the PDF
            doc.save("data.pdf");
          } else {
            console.error("autoTable is not loaded.");
          }
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
        const openCategoryModalBtn = document.querySelector(
          ".subnewcategory-open"
        ); // Button to open the modal
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
          const dropdownItems = dropdown.querySelector(
            ".select-dropdown-items"
          );
          const searchBox = dropdown.querySelector(".select-search-box");
          const options = dropdownItems.querySelectorAll(".option");
          const icon = dropdown.querySelector(".icon i");

          function toggleSearchInput() {
            if (options.length >= 4) {
              searchBox.style.display = "block";
            } else {
              searchBox.style.display = "none";
            }
          }

          function positionDropdown() {
            const rect = dropdown.getBoundingClientRect();
            const dropdownHeight = dropdownItems.offsetHeight;
            const spaceBelow = window.innerHeight - rect.bottom;
            const spaceAbove = rect.top;

            if (spaceBelow < dropdownHeight && spaceAbove > dropdownHeight) {
              dropdownItems.style.bottom = `${rect.height}px`;
              dropdownItems.style.top = "auto";
            } else {
              dropdownItems.style.top = "100%";
              dropdownItems.style.bottom = "auto";
            }
          }

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
                otherDropdown
                  .querySelector(".icon i")
                  .classList.add("fa-angle-down");
              }
            });

            // Toggle current dropdown
            dropdownItems.classList.toggle("show");

            // Toggle icon
            icon.classList.toggle(
              "fa-angle-up",
              dropdownItems.classList.contains("show")
            );
            icon.classList.toggle(
              "fa-angle-down",
              !dropdownItems.classList.contains("show")
            );

            // Show/hide search box
            toggleSearchInput();

            // Position dropdown correctly
            if (dropdownItems.classList.contains("show")) {
              positionDropdown();
            }
          });

          searchBox.addEventListener("input", function () {
            const filter = searchBox.value.toLowerCase();
            options.forEach(function (option) {
              option.style.display = option.textContent
                .toLowerCase()
                .includes(filter)
                ? "block"
                : "none";
            });
          });

          document.addEventListener("click", function (e) {
            if (!dropdown.contains(e.target)) {
              dropdownItems.classList.remove("show");
              icon.classList.remove("fa-angle-up");
              icon.classList.add("fa-angle-down");
              searchBox.style.display = "none";
            }
          });

          dropdownItems.addEventListener("click", function (e) {
            if (e.target.classList.contains("option")) {
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
