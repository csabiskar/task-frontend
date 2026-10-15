"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, Search, X, Menu, ChevronDown } from "lucide-react";
import {
  FacebookIcon,
  XTwitterIcon,
  InstagramIcon,
  LinkedinIcon,
} from "@/components/SocialIcons";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [pagesDropdownOpen, setPagesDropdownOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "FAQ", href: "#process" },
    { name: "Blog", href: "#projects" },
    {
      name: "Pages",
      href: "#",
      hasDropdown: true,
      subItems: [
        { name: "Shop", href: "#projects" },
        { name: "Cart", href: "#quote" },
        { name: "Wishlist", href: "#projects" },
        { name: "My Account", href: "#quote" },
      ],
    },
    { name: "Contact", href: "#quote" },
  ];

  return (
    <header className="absolute top-0 left-0 w-full z-50 pointer-events-auto">
      {/* ==================== 1. TOP BAR ==================== */}
      <div className="hidden sm:block bg-[#243344] text-white py-3 px-4 sm:px-8 border-b border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center text-[13px] gap-2">
          {/* Left: Call Us */}
          <div className="flex items-center space-x-2">
            <span className="text-[#94a3b8] font-normal"
            style={{ fontFamily: '"Times New Roman", Times, serif' }}>
              Have any questions? call us
            </span>
            <a
              href="tel:0018182345678"
              className="inline-flex items-center text-white font-bold text-[14px] hover:text-[#f4c03b] transition-colors ml-2 group"
            >
              <Phone className="w-3.5 h-3.5 text-[#f4c03b] fill-[#f4c03b] mr-1.5 transition-transform group-hover:scale-110" />
              <span style={{ fontFamily: '"Times New Roman", Times, serif' }}>+1 (818) 23 45 678</span>
            </a>
          </div>

          {/* Right: Social Media Icons (Facebook, X, Instagram, LinkedIn) */}
          <div className="flex items-center space-x-5 text-white/90">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#f4c03b] transition-colors"
              aria-label="Facebook"
            >
              <FacebookIcon className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#f4c03b] transition-colors"
              aria-label="X / Twitter"
            >
              <XTwitterIcon className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#f4c03b] transition-colors"
              aria-label="Instagram"
            >
              <InstagramIcon className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#f4c03b] transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>

      {/* ==================== 2. MAIN NAVBAR ==================== */}
      <div
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? "fixed top-0 left-0 bg-white shadow-md py-3.5 z-50 border-b border-gray-100"
            : "relative bg-transparent py-4 md:py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link href="#hero" className="relative block h-11 md:h-12 w-48 md:w-56">
            <Image
              src="/images/logo-construction.png"
              alt="XTRA Construction Logo"
              fill
              className="object-contain object-left"
              priority
            />
          </Link>

          {/* Desktop Navigation Menu */}
          <nav className="hidden lg:flex items-center space-x-7 xl:space-x-8 text-[15px] font-poppins font-medium text-[#243344]">
            {/* 1. Home Item: House Icon with Yellow Bar Underneath */}
            <Link
              href="#hero"
              onClick={() => setActiveLink("Home")}
              className="flex flex-col items-center justify-center py-1 group cursor-pointer"
              title="Home"
              style={{ fontFamily: '"Times New Roman", Times, serif' }}
            >
              <svg
                className={`w-[19px] h-[19px] transition-colors ${
                  activeLink === "Home"
                    ? "text-[#243344]"
                    : "text-[#243344] group-hover:text-[#f4c03b]"
                } fill-current`}
                viewBox="0 0 24 24"
              >
                <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
              </svg>
              <span
                className={`w-6 h-[3.5px] mt-1.5 transition-all ${
                  activeLink === "Home"
                    ? "bg-[#f4c03b]"
                    : "bg-transparent group-hover:bg-[#f4c03b]"
                }`}
              />
            </Link>

            {/* Other Menu Items */}
            {navItems.map((item) => (
              <div
                key={item.name}
                className="relative py-2"
                style={{ fontFamily: '"Times New Roman", Times, serif' }}
                onMouseEnter={() => item.hasDropdown && setPagesDropdownOpen(true)}
                onMouseLeave={() => item.hasDropdown && setPagesDropdownOpen(false)}
              >
                <a
                  href={item.href}
                  onClick={() => setActiveLink(item.name)}
                  className={`flex items-center space-x-1 transition-colors hover:text-[#f4c03b] ${
                    activeLink === item.name
                      ? "text-[#f4c03b] font-semibold"
                      : "text-[#243344]"
                  }`}
                >
                  <span>{item.name}</span>
                  {item.hasDropdown && (
                    <ChevronDown className="w-3.5 h-3.5 stroke-[2.5] text-[#243344] group-hover:text-[#f4c03b] transition-transform duration-200" />
                  )}
                </a>

                {/* Dropdown Menu for Pages */}
                {item.hasDropdown && pagesDropdownOpen && (
                  <div className="absolute top-full left-0 w-44 bg-white shadow-xl py-2 border-t-2 border-[#f4c03b] z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                    {item.subItems.map((sub) => (
                      <a
                        key={sub.name}
                        href={sub.href}
                        onClick={() => {
                          setActiveLink(item.name);
                          setPagesDropdownOpen(false);
                        }}
                        className="block px-4 py-2 text-sm text-[#243344] hover:bg-[#f4c03b]/10 hover:text-[#f4c03b] font-medium transition-colors"
                      >
                        {sub.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center space-x-5">
            {/* Search Icon */}
            <div className="relative">
              <button
                onClick={() => setSearchOpen(!searchOpen)}
                className="w-9 h-9 flex items-center justify-center text-[#243344] hover:text-[#f4c03b] transition-colors"
                aria-label="Search"
              >
                <Search className="w-5 h-5 stroke-[2.2]" />
              </button>

              {/* Search Popup Dropdown */}
              {searchOpen && (
                <div className="absolute right-0 top-12 w-72 bg-white shadow-2xl p-3 z-50 border-t-2 border-[#f4c03b] animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="flex items-center border border-gray-200 px-3 py-1.5 focus-within:border-[#f4c03b]">
                    <input
                      type="text"
                      placeholder="Type keyword to search..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full text-xs text-[#243344] outline-none bg-transparent"
                      autoFocus
                    />
                    <button
                      onClick={() => setSearchOpen(false)}
                      className="text-gray-400 hover:text-gray-600"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Free Consultation Button (White Box Card with Shadow) */}
            <button
              type="button"
              style={{ fontFamily: '"Times New Roman", Times, serif' }}
              className="bg-white text-[#243344] hover:bg-[#243344] hover:text-[#f4c03b] font-poppins font-bold text-[15px] px-8 py-3.5 shadow-[0_4px_25px_rgba(0,0,0,0.08)] border border-gray-100 transition-all duration-300 rounded-none cursor-pointer"
            >
              Free Consultation
            </button>
          </div>

          {/* Mobile Buttons: Yellow Phone Box & Navy Hamburger Box */}
          <div className="flex items-center space-x-1.5 lg:hidden">
            <a
              href="tel:0018182345678"
              className="w-11 h-11 bg-[#f4c03b] hover:bg-[#e5b02d] text-[#243344] flex items-center justify-center transition-colors shadow-sm"
              aria-label="Call Us"
            >
              <Phone className="w-5 h-5 fill-current" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-11 h-11 bg-[#243344] hover:bg-[#1b2632] text-white flex items-center justify-center transition-colors shadow-sm focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 stroke-[2.5]" />
              ) : (
                <Menu className="w-6 h-6 stroke-[2.5]" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-[#243344]/80 backdrop-blur-sm">
          <div className="fixed inset-y-0 right-0 max-w-xs w-full bg-white shadow-2xl p-6 flex flex-col justify-between overflow-y-auto">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-gray-100">
                <div className="relative h-9 w-36">
                  <Image
                    src="/images/logo-construction.png"
                    alt="XTRA Construction Logo"
                    fill
                    className="object-contain object-left"
                  />
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1 text-gray-500 hover:text-[#243344]"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="flex flex-col space-y-4 mt-6">
                <Link
                  href="#hero"
                  onClick={() => {
                    setActiveLink("Home");
                    setMobileMenuOpen(false);
                  }}
                  className={`flex items-center space-x-2 text-base font-semibold py-1.5 transition-colors ${
                    activeLink === "Home"
                      ? "text-[#f4c03b]"
                      : "text-[#243344] hover:text-[#f4c03b]"
                  }`}
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
                  </svg>
                  <span>Home</span>
                </Link>

                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => {
                      setActiveLink(item.name);
                      setMobileMenuOpen(false);
                    }}
                    className={`text-base font-semibold py-1.5 transition-colors ${
                      activeLink === item.name
                        ? "text-[#f4c03b]"
                        : "text-[#243344] hover:text-[#f4c03b]"
                    }`}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-gray-100 space-y-4">
              <a
                href="tel:0018182345678"
                className="flex items-center text-[#243344] font-bold text-sm"
              >
                <Phone className="w-4 h-4 text-[#f4c03b] mr-2" />
                <span>+1 (818) 23 45 678</span>
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full bg-[#243344] text-[#f4c03b] font-bold text-sm tracking-wider uppercase py-3 text-center"
              >
                Free Consultation
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
