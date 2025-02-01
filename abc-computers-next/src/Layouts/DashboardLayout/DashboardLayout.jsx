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

      // $(document).ready(function () {

      //   // Export table to CSV
      //   $("#csvBtn").click(function () {
      //     let csv = [];
      //     const rows = document.querySelectorAll("table tr");

      //     rows.forEach((row) => {
      //       const cols = row.querySelectorAll("td, th");
      //       let rowData = [];
      //       cols.forEach((col) => rowData.push(col.innerText));
      //       csv.push(rowData.join(","));
      //     });

      //     const csvFile = new Blob([csv.join("\n")], { type: "text/csv" });
      //     const downloadLink = document.createElement("a");
      //     downloadLink.download = "data.csv";
      //     downloadLink.href = window.URL.createObjectURL(csvFile);
      //     downloadLink.click();
      //   });

      // });
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
