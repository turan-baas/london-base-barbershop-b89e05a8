"use client";

import { useState, useEffect } from "react";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#reviews", label: "Reviews" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[var(--color-primary)]/95 backdrop-blur-[12px] shadow-lg"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-20">
        {/* Logo */}
        <a
          href="#home"
          className="font-[family-name:var(--font-heading)] text-xl font-bold tracking-tight text-white"
        >
          London <span className="text-[var(--color-accent)]">Base</span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="nav-link text-[0.8rem] uppercase tracking-[0.15em] font-medium text-white/80 hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="ml-4 rounded-full bg-[var(--color-accent)] px-7 py-2.5 text-[0.8rem] uppercase tracking-[0.15em] font-medium text-[var(--color-primary)] hover:bg-[var(--color-accent-dark)] hover:scale-[1.03] hover:shadow-2xl transition-all duration-300"
          >
            Contact
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden relative w-8 h-8 flex flex-col justify-center items-center z-50"
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-[1.5px] bg-white transition-all duration-300 ${
              menuOpen ? "rotate-45 translate-y-[1px]" : "-translate-y-1.5"
            }`}
          />
          <span
            className={`block w-6 h-[1.5px] bg-white transition-all duration-300 ${
              menuOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`block w-6 h-[1.5px] bg-white transition-all duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-[1px]" : "translate-y-1.5"
            }`}
          />
        </button>
      </nav>

      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 bg-[var(--color-primary)]/98 flex flex-col items-center justify-center transition-all duration-500 md:hidden ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {navLinks.map((link, i) => (
          <a
            key={link.href}
            href={link.href}
            onClick={() => setMenuOpen(false)}
            className="menu-item-animate text-2xl font-[family-name:var(--font-heading)] text-white mb-8 hover:text-[var(--color-accent)] transition-colors"
            style={{ animationDelay: menuOpen ? `${i * 100}ms` : "0ms" }}
          >
            {link.label}
          </a>
        ))}
        <a
          href="#contact"
          onClick={() => setMenuOpen(false)}
          className="menu-item-animate mt-4 rounded-full bg-[var(--color-accent)] px-10 py-4 text-sm uppercase tracking-[0.15em] font-medium text-[var(--color-primary)]"
          style={{ animationDelay: menuOpen ? `${navLinks.length * 100}ms` : "0ms" }}
        >
          Contact
        </a>
      </div>
    </header>
  );
}
