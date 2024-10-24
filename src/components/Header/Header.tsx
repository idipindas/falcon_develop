"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CiMenuFries } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const pathname = usePathname();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/contact", label: "Contact" },
    { href: "/industries", label: "Industries" },


  ];

  const isHomePage = pathname === "/";
  const textColor = isHomePage ? "text-white" : "text-black";

  return (
    <header
      className={`absolute top-0 left-0 w-full ${textColor} py-4 shadow-lg z-10 border-b-2`}
    >
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <img src="/images/logo_full.png" alt="Logo" className="h-16 w-18" />
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex">
          <ul className="flex space-x-28">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`hover:underline ${textColor}`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Menu Button - Only visible below md breakpoint */}
        <button className={`${textColor} md:hidden`} onClick={toggleSidebar}>
          <CiMenuFries size={40} />
        </button>
      </div>

      {/* Sidebar - Mobile */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-black bg-opacity-90 transform transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden z-50`}
      >
        <div className="flex justify-end p-4">
          <button onClick={toggleSidebar}>
            <IoMdClose size={32} className="text-white" />
          </button>
        </div>
        <nav className="mt-8">
          <ul className="flex flex-col space-y-4 px-4">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-white hover:underline text-lg"
                  onClick={toggleSidebar}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
