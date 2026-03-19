"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Program", href: "/program" },
    { label: "STEM Lab Setup", href: "/lab-setup" },
  ];

  return (
    <div
      className="w-full px-12 py-9"
      style={{ background: "transparent", position: "relative", zIndex: 10 }}
    >
      {/* Navbar pill */}
      <div
        className="flex flex-row justify-between items-center px-8 py-3 mx-auto overflow-hidden"
        style={{
          background: "#FFFFFF",
          border: "1px solid #27272A",
          borderRadius: "20px",
          maxWidth: "1344px",
          height: "96px",
        }}
      >
        {/* Logo */}
        <Link href="/">
          <div style={{ width: "86px", height: "70px", position: "relative", mixBlendMode: "multiply" }}>
            <Image src="/logo.png" alt="Bharat Smart STEM" fill className="object-contain" />
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex flex-row items-center" style={{ gap: "48px" }}>
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className="py-2.5 flex justify-center items-center"
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontWeight: isActive ? 600 : 300,
                  fontSize: "16px",
                  color: "#27272A",
                  textTransform: "uppercase",
                  textDecoration: "none",
                }}
              >
                {link.label}
              </Link>
            );
          })}

          <Link href="/contact">
            <button
              style={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 700,
                fontSize: "16px",
                color: "#FFFFFF",
                background: "#F97316",
                borderRadius: "8px",
                height: "40px",
                padding: "16px 28px",
                border: "1px solid transparent",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                whiteSpace: "nowrap",
              }}
            >
              Contact Us
            </button>
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className="block w-6 h-0.5 transition-all" style={{ background: "#27272A", transform: menuOpen ? "rotate(45deg) translateY(8px)" : "none" }} />
          <span className="block w-6 h-0.5 transition-all" style={{ background: "#27272A", opacity: menuOpen ? 0 : 1 }} />
          <span className="block w-6 h-0.5 transition-all" style={{ background: "#27272A", transform: menuOpen ? "rotate(-45deg) translateY(-8px)" : "none" }} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="md:hidden mt-2 px-6 py-4 flex flex-col gap-4"
          style={{ background: "#FFFFFF", border: "1px solid #27272A", borderRadius: "16px" }}
        >
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontWeight: isActive ? 600 : 300,
                  fontSize: "16px",
                  color: "#27272A",
                  textTransform: "uppercase",
                  textDecoration: "none",
                }}
              >
                {link.label}
              </Link>
            );
          })}
          <Link href="/contact" onClick={() => setMenuOpen(false)}>
            <button
              style={{
                width: "100%",
                fontFamily: "Inter, sans-serif",
                fontWeight: 700,
                fontSize: "16px",
                color: "#FFFFFF",
                background: "#F97316",
                borderRadius: "8px",
                padding: "10px 28px",
                border: "none",
                cursor: "pointer",
              }}
            >
              Contact Us
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}