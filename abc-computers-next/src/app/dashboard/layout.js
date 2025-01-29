import DashboardNavbar from "@/Components/Dashboard/DashboardNavbar/DashboardNavbar";
import React from "react";
import DashboardSidebar from "@/Components/Dashboard/DashboardSidebar/DashboardSidebar";
import "@/assets/css/navbar-sidebar.css";
import "@/assets/css/style.css";

const DashboardLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <DashboardNavbar />
        <DashboardSidebar />
        {children}
      </body>
    </html>
  );
};

export default DashboardLayout;
