"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image"; // Import Image component for optimized images


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
    { name: "About Us", path: "/aboutusdetail" },
    { name: "Services", path: "/services" },
    { name: "Blog", path: "/blogs" },
    { name: "Testimonials", path: "/testimonials" },
  ];

  return (
    <>
      {/* Fixed Header */}
      <header className="fixed top-0 left-0 right-0 z-50 w-full bg-white shadow-md">
      <div className="container flex justify-between items-center p-5">
          {/* Logo */}

<Link href="/" className="flex items-center text-gray-700 text-xl font-bold">
  <Image
    src="/Images/logo.png"  // Correct path to the logo image in the public directory
    alt="Fana Logo"
    width={40}  // Adjust width as needed
    height={40}  // Adjust height as needed
  />
  <span className="ml-1 text-[#209747] pl-3">Fana</span>
</Link>



          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-1 text-[#717171]">
            {navItems.map((item, index) => (
              <Link
                key={item.name}
                href={item.path}
                className="px-4 py-2 rounded-lg transition hover:bg-[#209747] hover:text-white"
              >
                {item.name}
              </Link>
            ))}
            {/* Booking Link */}
            <Link
              href="/booking"
              className="px-6 py-2 bg-[#209747] text-white font-semibold rounded-lg hover:bg-[#209747] transition"
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
                className="w-full text-center py-3 px-6 rounded-lg transition hover:bg-[#209747] hover:text-white"
              >
                {item.name}
              </Link>
            ))}
            {/* Booking Link for Mobile */}
            <Link
              href="/booking"
              className="w-full text-center py-3 px-6 bg-[#209747] text-white font-semibold rounded-lg shadow-md hover:bg-green-600 transition"
            >
              Booking
            </Link>
          </nav>
        )}
      </header>


      {/* Adjust padding to avoid overlap */} 
      <div className="mt-20 p-0">
        {/* Your main content goes here */}
       </div> 


    </>
  );
}