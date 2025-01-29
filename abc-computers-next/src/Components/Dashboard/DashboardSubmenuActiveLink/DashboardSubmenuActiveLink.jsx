import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const DashboardSubmenuActiveLink = ({ children, href }) => {
  const pathname = usePathname();
  const active = pathname === href;

  return (
    <li>
      <Link href={href} className={`${active && "active"}`}>
        <span className="text">{children}</span>
      </Link>
    </li>
  );
};

export default DashboardSubmenuActiveLink;
