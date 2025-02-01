"use client";

import DashboardNavbar from "@/Components/Dashboard/DashboardNavbar/DashboardNavbar";
import DashboardSidebar from "@/Components/Dashboard/DashboardSidebar/DashboardSidebar";
import React, { useEffect } from "react";

const DashboardLayout = ({ children }) => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://code.jquery.com/jquery-3.6.4.min.js";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {

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
