"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface Props {
    text: string;
    href: string;
    icon: JSX.Element;
}

export const SidebarItem = ({text, href, icon}: Props) => {

    const pathname = usePathname();

	return (
		<li>
			<Link
				href={href}
				className={
                    `
                    relative px-4 py-3 flex items-center space-x-4 rounded-xl hover:bg-slate-100
                    ${pathname === href? "text-white bg-gradient-to-r from-sky-600 to-cyan-400" : ""}
                    `
                }
			>
				{icon}
				<span className="-mr-1 font-medium">{text}</span>
			</Link>
		</li>
	);
};
