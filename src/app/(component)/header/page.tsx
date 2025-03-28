"use client";
import { useState } from "react";
import Link from "next/link";

const MenuIcon = () => (
  <svg
    className="w-6 h-6"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    viewBox="0 0 24 24"
  >
    <path d="M4 6h16M4 12h16M4 18h16"></path>
  </svg>
);

const CloseIcon = () => (
  <svg
    className="w-6 h-6"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    viewBox="0 0 24 24"
  >
    <path d="M6 18L18 6M6 6l12 12"></path>
  </svg>
);

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/aboutus" },
    { name: "Services", path: "/services" },
    { name: "Blog", path: "/blog" },
    { name: "Testimonials", path: "/testimonials" },
    { name: "Contact Us", path: "/contactus" },
  ];

  return (
    <header className="background-color">
      <div className="container mx-auto flex justify-between items-center p-5">
        {/* Logo */}
        <Link href="/" className="flex items-center text-gray-900 text-xl font-bold">
          <span className="ml-1 text-pink-400">Spa Haven</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex space-x-6 text-gray-600">
          {navItems.map((item, index) => (
            <Link
              key={item.name}
              href={item.path}
              className={`${index === 0 ? "text-pink-500" : "hover:text-pink-500"}`}
            >
              {item.name}
            </Link>
          ))}
          {/* Booking Link */}
          <Link
            href="/booking"
            className="px-6 py-2 bg-pink-500 text-white font-semibold rounded-lg hover:bg-pink-600 transition"
          >
            Booking
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <nav className="lg:hidden bg-white border-t border-gray-200 p-4 flex flex-col items-center space-y-4">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.path}
              className="w-full text-center py-3 px-6 bg-pink-500 text-white font-semibold rounded-lg shadow-md hover:bg-pink-600 transition"
            >
              {item.name}
            </Link>
          ))}
          {/* Booking Link for Mobile */}
          <Link
            href="/booking"
            className="w-full text-center py-3 px-6 bg-pink-500 text-white font-semibold rounded-lg shadow-md hover:bg-pink-600 transition"
          >
            Booking
          </Link>
        </nav>
      )}
    </header>
  );
}
