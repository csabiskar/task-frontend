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
  const [mobilePagesOpen, setMobilePagesOpen] = useState(false);
  const [pagesDropdownOpen, setPagesDropdownOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");
  const [searchQuery, setSearchQuery] = useState("");
  const [year, setYear] = useState(2026);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

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

  // Lock page scroll while the mobile drawer is open + close on Escape
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    const onKey = (e) => {
      if (e.key === "Escape") setMobileMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [mobileMenuOpen]);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setMobilePagesOpen(false);
  };

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

  const itemAnim = (i) => ({
    transitionDelay: mobileMenuOpen ? `${150 + i * 55}ms` : "0ms",
  });
  const itemClass = `transition-all duration-500 ease-out ${
    mobileMenuOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-6"
  }`;

  return (
    <header className="absolute top-0 left-0 w-full z-50 pointer-events-auto">
      <div className="hidden sm:block bg-[#243344] text-white py-3 px-4 sm:px-8 border-b border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center text-[13px] gap-2">
          <div className="flex items-center space-x-2">
            <span
              className="text-[#94a3b8] font-normal"
              style={{ fontFamily: '"Times New Roman", Times, serif' }}
            >
              Have any questions? call us
            </span>
            <a
              href="tel:0018182345678"
              className="inline-flex items-center text-white font-bold text-[14px] hover:text-[#f4c03b] transition-colors ml-2 group"
            >
              <Phone className="w-3.5 h-3.5 text-[#f4c03b] fill-[#f4c03b] mr-1.5 transition-transform group-hover:scale-110" />
              <span style={{ fontFamily: '"Times New Roman", Times, serif' }}>
                +1 (818) 23 45 678
              </span>
            </a>
          </div>

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

      <div
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? "fixed top-0 left-0 bg-white shadow-md py-3.5 z-50 border-b border-gray-100"
            : "relative bg-transparent py-4 md:py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between">
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
          <div className="hidden sm:flex items-center space-x-5">
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
            <button
              type="button"
              style={{ fontFamily: '"Times New Roman", Times, serif' }}
              className="bg-white text-[#243344] hover:bg-[#243344] hover:text-[#f4c03b] font-poppins font-bold text-[15px] px-8 py-3.5 shadow-[0_4px_25px_rgba(0,0,0,0.08)] border border-gray-100 transition-all duration-300 rounded-none cursor-pointer"
            >
              Free Consultation
            </button>
          </div>

          <div className="flex items-center space-x-1.5 lg:hidden">
            <a
              href="tel:0018182345678"
              className="w-11 h-11 bg-[#f4c03b] hover:bg-[#e5b02d] text-[#243344] flex items-center justify-center transition-colors shadow-sm"
              aria-label="Call Us"
            >
              <Phone className="w-5 h-5 fill-current" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="w-11 h-11 bg-[#243344] hover:bg-[#1b2632] text-white flex items-center justify-center transition-colors shadow-sm focus:outline-none"
              aria-label="Open menu"
              aria-expanded={mobileMenuOpen}
            >
              <Menu className="w-6 h-6 stroke-[2.5]" />
            </button>
          </div>
        </div>
      </div>

      <div
        className={`lg:hidden fixed inset-0 z-[60] ${
          mobileMenuOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
        aria-hidden={!mobileMenuOpen}
      >
        <div
          onClick={closeMobileMenu}
          className={`absolute inset-0 bg-black/60 backdrop-blur-[2px] transition-opacity duration-500 ease-in-out ${
            mobileMenuOpen ? "opacity-100" : "opacity-0"
          }`}
        /> 
        <button
          onClick={closeMobileMenu}
          aria-label="Close menu"
          className={`absolute top-5 right-[calc(min(85%,24rem)+14px)] w-10 h-10 flex items-center justify-center text-white transition-all duration-500 ease-out ${
            mobileMenuOpen
              ? "opacity-100 rotate-0 delay-300"
              : "opacity-0 -rotate-90"
          }`}
        >
          <X className="w-9 h-9 stroke-[1.2]" />
        </button>
        <aside
          className={`absolute inset-y-0 right-0 w-[85%] max-w-sm bg-gradient-to-b from-[#243344] to-[#1b1b1b] shadow-2xl flex flex-col justify-between overflow-y-auto will-change-transform transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <nav className="flex flex-col">
            {/* Home */}
            <Link
              href="#hero"
              onClick={() => {
                setActiveLink("Home");
                closeMobileMenu();
              }}
              style={itemAnim(0)}
              className={`flex items-center px-8 py-[18px] border-b border-white/10 ${itemClass}`}
              aria-label="Home"
            >
              <svg className="w-5 h-5 fill-[#f4c03b]" viewBox="0 0 24 24">
                <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
              </svg>
            </Link>

            {navItems.map((item, i) =>
              item.hasDropdown ? (
                <div
                  key={item.name}
                  style={itemAnim(i + 1)}
                  className={`border-b border-white/10 ${itemClass}`}
                >
                  <button
                    type="button"
                    onClick={() => setMobilePagesOpen((v) => !v)}
                    aria-expanded={mobilePagesOpen}
                    className={`w-full flex items-center justify-between px-8 py-[18px] font-poppins font-semibold text-[17px] text-left ${
                      mobilePagesOpen ? "text-[#f4c03b]" : "text-white"
                    }`}
                  >
                    <span>{item.name}</span>
                    <ChevronDown
                      className={`w-5 h-5 stroke-[2.5] transition-transform duration-300 ${
                        mobilePagesOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <div
                    className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
                      mobilePagesOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="bg-black/20 py-2">
                        {item.subItems.map((sub) => (
                          <a
                            key={sub.name}
                            href={sub.href}
                            onClick={() => {
                              setActiveLink(item.name);
                              closeMobileMenu();
                            }}
                            className="block px-12 py-3 font-poppins text-[15px] text-white/80 hover:text-[#f4c03b] transition-colors"
                          >
                            {sub.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => {
                    setActiveLink(item.name);
                    closeMobileMenu();
                  }}
                  style={itemAnim(i + 1)}
                  className={`px-8 py-[18px] border-b border-white/10 font-poppins font-semibold text-[17px] hover:text-[#f4c03b] ${
                    activeLink === item.name ? "text-[#f4c03b]" : "text-white"
                  } ${itemClass}`}
                >
                  {item.name}
                </a>
              )
            )}
          </nav>

          <div
            style={itemAnim(navItems.length + 2)}
            className={`pb-10 pt-10 ${itemClass}`}
          >
            <div className="flex items-center justify-center gap-3">
              {[
                { Icon: FacebookIcon, href: "https://facebook.com", label: "Facebook" },
                { Icon: XTwitterIcon, href: "https://twitter.com", label: "X / Twitter" },
                { Icon: InstagramIcon, href: "https://instagram.com", label: "Instagram" },
                { Icon: LinkedinIcon, href: "https://linkedin.com", label: "LinkedIn" },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 bg-[#f4c03b] hover:bg-white text-[#243344] flex items-center justify-center transition-colors"
                >
                  <Icon className="w-[18px] h-[18px]" />
                </a>
              ))}
            </div>
            <p className="mt-8 text-center font-poppins text-base text-white/60">
              © Copyright {year}
            </p>
          </div>
        </aside>
      </div>
    </header>
  );
}