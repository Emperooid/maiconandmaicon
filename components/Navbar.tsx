"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import logoSrc from "../assets/miacon_logw-removebg-preview.png";

const navLinks = [
  { label: "Services",   href: "#services" },
  { label: "Pricing",    href: "#pricing" },
  { label: "Categories", href: "#categories" },
];

export default function Navbar() {
  const [open, setOpen]       = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 64);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const dark = scrolled || open;

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
        dark ? "bg-brand-dark shadow-lg" : "bg-f5fbf7/90 backdrop-blur-md"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 flex items-center justify-between h-[72px]">

        {/* Logo */}
        <Link href="#home" className="flex items-center">
          <Image
            src={logoSrc}
            alt="Maicon and Maicon"
            height={40}
            width={100}
            className="object-contain"
            style={{ filter: dark ? 'brightness(0) invert(1)' : 'none', transition: 'filter 0.35s ease' }}
            priority
          />
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`text-sm font-medium tracking-wide transition-colors duration-200 ${
                dark ? "text-white/65 hover:text-white" : "text-black/55 hover:text-black"
              }`}
            >
              {l.label}
            </a>
          ))}
          <a
            href="https://paystack.shop/emerging-talent-positioning"
            target="_blank"
            rel="noopener noreferrer"
            className={`text-xs font-medium tracking-[0.1em] uppercase py-2.5 px-7 rounded-lg transition-all duration-200 ${
              dark
                ? "bg-brand-green text-white hover:bg-white hover:text-brand-dark"
                : "bg-brand-dark text-white hover:bg-brand-green"
            }`}
          >
            Get Started
          </a>
        </div>

        {/* Hamburger */}
        <button
          className="md:hidden p-2 flex flex-col gap-[5px] group"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-[1.5px] transition-all duration-300 ${dark ? "bg-white" : "bg-black"} ${open ? "rotate-45 translate-y-[6.5px]" : ""}`} />
          <span className={`block w-6 h-[1.5px] transition-all duration-300 ${dark ? "bg-white" : "bg-black"} ${open ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-[1.5px] transition-all duration-300 ${dark ? "bg-white" : "bg-black"} ${open ? "-rotate-45 -translate-y-[6.5px]" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-brand-dark overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-6 border-t border-white/10">
              {navLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-white/70 font-medium text-base hover:text-white transition-colors"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="https://paystack.shop/emerging-talent-positioning"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-brand-green text-white text-xs font-medium tracking-[0.1em] uppercase py-3 px-6 rounded-lg text-center hover:bg-white hover:text-brand-dark transition-colors"
              >
                Get Started
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
