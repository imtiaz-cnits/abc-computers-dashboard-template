"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const DashboardActiveLink = ({ children, href }) => {
  const pathname = usePathname();

  const active = href === pathname;

  console.log(href, pathname);

  return (
    <li className={`active-link ${active && "active"}`}>
      <Link href={href}>{children}</Link>
    </li>
  );
};

export default DashboardActiveLink;
