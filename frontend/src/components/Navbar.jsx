'use client'

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
const Navbar = () => {
  const pathname = usePathname();

  const links = [
    { name: "HOME", href: "/" },
    { name: "COLLECTION", href: "/collection" },
    { name: "ABOUT", href: "/about" },
    { name: "CONTACT", href: "/contact" },
  ];
  return (
    <div className="flex items-center justify-between py-5 font-medium">
      <img src="/assets/frontend_assets/logo.png" className="w-40" />

      <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
        {links.map((link) => {
          const isActive =
            pathname === link.href ||
            (link.href !== "/" && pathname.startsWith(link.href));
          return (
            <Link className="flex flex-col items-center gap-1" key={link.name} href={link.href}>
              <p className={
                isActive ? "text-black font-semibold" : "text-gray-700 hover:text-black"
              }>
                {link.name}
              </p>
              <hr className={`w-2/4 border-none h-[1.5px] transition-all duration-200 ${
                isActive ? "bg-gray-700" : "bg-transparent"
              }`}/>
            </Link>
          );
        })}
      </ul>
      <div className="flex items-center gap-6">
        <img src="/assets/frontend_assets/search_icon.png" className="w-5 cursor-pointer" alt="" />
        <div className="group relative">
          <img src="/assets/frontend_assets/profile_icon.png" className="w-5 cursor-pointer" alt="" />
          <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
            <div className="flex flex-col gap-2 w-40 py-3 px-5 bg-slate-100 text-gray-500 rounded">
              <p className="cursor-pointer hover:text-black">My Profile</p>
              <p className="cursor-pointer hover:text-black">Orders</p>
              <p className="cursor-pointer hover:text-black">Logout</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
