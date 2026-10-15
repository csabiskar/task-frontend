"use client";

import Image from "next/image";
import Link from "next/link";
import {
  FacebookIcon,
  TwitterIcon,
  InstagramIcon,
  YoutubeIcon,
} from "@/components/SocialIcons";

const socialLinkClass =
  "w-14 h-14 bg-[#f4c03b] hover:bg-white text-[#263244] flex items-center justify-center transition-colors duration-300";

export default function Footer() {
  return (
    <footer className="w-full">
      {/* Dark section */}
      <div className="relative bg-[#263244] pt-16 pb-16 sm:pt-[106px] sm:pb-[100px] px-4">
        {/* Thin gold line at the top, inset from the edges */}
        <div className="absolute top-0 left-4 right-4 sm:left-10 sm:right-10 h-px bg-[#edc251]" />

        <div className="max-w-3xl mx-auto flex flex-col items-center text-center">
          {/* Footer Logo */}
          <div className="relative w-64 h-[90px] mb-10 sm:mb-14">
            <Image
              src="/images/footer-logo-construction.png"
              alt="XTRA Construction Logo"
              fill
              className="object-contain"
            />
          </div>

          {/* Description, four centered lines */}
          <p
            className="text-[#cfd2d8] text-base leading-8 sm:text-lg sm:leading-[40px] mb-12 sm:mb-[70px]"
            style={{ fontFamily: "'Times New Roman', Times, serif" }}
          >
            <span className="block">
              A company is any entity that engages in business.
            </span>
            <span className="block">
              Companies can be structured in different ways.
            </span>
            <span className="block">
              For example, your company can be a sole proprietorship,
            </span>
            <span className="block">a partnership, or a corporation.</span>
          </p>

          {/* Social icons in gold squares */}
          <div className="flex items-center gap-3">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className={socialLinkClass}
              aria-label="Facebook"
            >
              <FacebookIcon className="w-5 h-5 fill-current" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className={socialLinkClass}
              aria-label="X"
            >
              <TwitterIcon className="w-5 h-5 fill-current" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className={socialLinkClass}
              aria-label="Instagram"
            >
              <InstagramIcon className="w-5 h-5" />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className={socialLinkClass}
              aria-label="YouTube"
            >
              <YoutubeIcon className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* White bottom bar */}
      <div className="bg-white px-4 sm:px-10 py-8 sm:py-0 sm:h-[95px]">
        <div
          className="h-full flex flex-col sm:flex-row items-center justify-between gap-4 text-base text-[#6b6e75]"
          style={{ fontFamily: "'Times New Roman', Times, serif" }}
        >
          <p>© 2026 XTRA, Powered by WordPress</p>

          <div className="flex items-center">
            <Link
              href="#"
              className="hover:text-[#263244] transition-colors"
            >
              Privacy Policy
            </Link>
            <span className="mx-5 block w-px h-10 bg-gray-300 rotate-[15deg]" />
            <Link
              href="#about"
              className="hover:text-[#263244] transition-colors"
            >
              About
            </Link>
            <span className="mx-5 block w-px h-10 bg-gray-300 rotate-[15deg]" />
            <Link
              href="#quote"
              className="hover:text-[#263244] transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}