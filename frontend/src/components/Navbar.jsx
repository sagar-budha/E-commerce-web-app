"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
const Navbar = () => {
  const pathname = usePathname();

  const [visible, setvisible] = useState(false);

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
            <Link
              className="flex flex-col items-center gap-1"
              key={link.name}
              href={link.href}
            >
              <p
                className={
                  isActive
                    ? "text-black font-semibold"
                    : "text-gray-700 hover:text-black"
                }
              >
                {link.name}
              </p>
              <hr
                className={`w-2/4 border-none h-[1.5px] transition-all duration-200 ${
                  isActive ? "bg-gray-700" : "bg-transparent"
                }`}
              />
            </Link>
          );
        })}
      </ul>
      <div className="flex items-center gap-6">
        <img
          src="/assets/frontend_assets/search_icon.png"
          className="w-5 cursor-pointer"
          alt=""
        />
        <div className="group relative">
          <img
            src="/assets/frontend_assets/profile_icon.png"
            className="w-5 cursor-pointer"
            alt=""
          />
          <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
            <div className="flex flex-col gap-2 w-40 py-3 px-5 bg-slate-100 text-gray-500 rounded">
              <p className="cursor-pointer hover:text-black">My Profile</p>
              <p className="cursor-pointer hover:text-black">Orders</p>
              <p className="cursor-pointer hover:text-black">Logout</p>
            </div>
          </div>
        </div>
        <Link href="/cart" className="relative">
          <img
            src="/assets/frontend_assets/cart_icon.png"
            className="w-5 min-w-5"
            alt=""
          />
          <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">
            10
          </p>
        </Link>
        <img
          onClick={() => setvisible(true)}
          src="assets/frontend_assets/menu_icon.png"
          className="w-5 cursor-pointer sm:hidden"
          alt=""
        />
      </div>
      {/* Sidebar menu for small screen */}
      <div
        className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${
          visible ? "w-full" : "w-0"
        }`}
      >
        <div className="flex flex-col text-gray-600">
          <div
            onClick={() => setvisible(false)}
            className="flex items-center gap-4 p-3 cursor-pointer"
          >
            <img
              src="assets/frontend_assets/dropdown_icon.png"
              className="h-4 rotate-180"
              alt=""
            />
            <p>Back</p>
          </div>
          <ul className="p-4 space-y-3 text-sm text-gray-700 bg-white rounded-lg shadow-md w-64">
            {links.map((link) => (
              <li key={link.name}>
                <Link
                onClick={()=> setvisible(false)}
                  href={link.href}
                  className="flex items-center px-4 py-2 rounded-lg hover:text-white hover:bg-gray-500"
                >
                  <span className="ml-2 font-medium">{link.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
