import React from "react";
import "@/assets/css/navbar-sidebar.css";
import "@/assets/css/all-modal.css";
import "@/assets/css/table-function.css";
import "@/assets/css/style.css";
import DashboardLayout from "@/Layouts/DashboardLayout/DashboardLayout";

export const metadata = {
  title: "Dashboard | ABC Computers",
};

const layout = ({ children }) => {
  return (
    <>
      <DashboardLayout>{children}</DashboardLayout>
    </>
  );
};

export default layout;
