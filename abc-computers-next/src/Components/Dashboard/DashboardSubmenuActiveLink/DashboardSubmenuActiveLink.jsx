"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const DashboardSubmenuActiveLink = ({ children, href }) => {
  const pathname = usePathname();
  const active = pathname === href;

  return (
    <li  className={`${active ? "active" : ""}`}>
      <Link href={href}>
        <span className="text">{children}</span>
      </Link>
    </li>
  );
};

export default DashboardSubmenuActiveLink;
