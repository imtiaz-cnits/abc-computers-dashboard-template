"use client"
import React, { useEffect, useState } from 'react';
import { FaAngleDown } from 'react-icons/fa';
import DashboardSubmenuActiveLink from '../DashboardSubmenuActiveLink/DashboardSubmenuActiveLink';
import { usePathname } from 'next/navigation';

const DashboardSubmenu = ({ submenuItems, icon, submenuTitle }) => {
    const [submenuActive, setSubmenuActive] = useState(false)

    const paths = submenuItems?.map(item => item?.href)

    const currentPath = usePathname()

    useEffect(() => {
        const active = paths?.find(path => path === currentPath)

        setSubmenuActive(!!active)

    }, [currentPath])

    // TODO: make it floating on side bar collapse

    return (
        <li className={`submenu-active ${submenuActive ? "active" : ""}`}>
            <a className='submenu-toggle'>
                {icon}
                <span className="text">{submenuTitle}</span>
                <FaAngleDown className="arrow-icon" />
            </a>
            <ul className={`sub-menu`}>
                {
                    submenuItems?.map((item, idx) => (
                        <DashboardSubmenuActiveLink key={idx} href={item?.href} setSubmenuActive={setSubmenuActive}>
                            {item?.title}
                        </DashboardSubmenuActiveLink>
                    ))
                }
            </ul>
        </li>
    );
};

export default DashboardSubmenu;