import Link from "next/link";
import Image from "next/image";

const contactItems = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="#9CA3AF" width="16" height="16" xmlns="http://www.w3.org/2000/svg">
        <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24 11.47 11.47 0 0 0 3.59.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.59a1 1 0 0 1-.25 1.01z" />
      </svg>
    ),
    content: (
      <a href="tel:+919876543210" className="hover:text-[#E8834A] transition-colors">
        +91 98765 43210
      </a>
    ),
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="16" height="16" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
    content: (
      <a href="mailto:info@bharatsmartstem.com" className="hover:text-[#E8834A] transition-colors">
        info@bharatsmartstem.com
      </a>
    ),
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="16" height="16" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    content: <span>Mumbai, Maharashtra, India</span>,
  },
];

const socialLinks = [
  {
    label: "Facebook",
    href: "#",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    label: "Twitter / X",
    href: "#",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "#",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "#",
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#1E1E1E] text-white px-6 pt-16 pb-6">
      <div className="max-w-6xl mx-auto">

        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <div>
            <div className="mb-5 w-40 h-20 relative" style={{ mixBlendMode: "screen" }}>
              <Image src="/logo.png" alt="Bharat Smart STEM Logo" fill className="object-contain object-left" />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-5">
              Empowering India&apos;s future through STEM
            </p>
            {/* Social Icons */}
            <div className="flex gap-3">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-9 h-9 rounded-full bg-gray-700 flex items-center justify-center text-white hover:bg-[#E8834A] transition-colors"
                >
                  {s.svg}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-5 text-sm tracking-wide uppercase">Quick Links</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              {["Home", "About", "Programs", "STEM Lab Setup", "Contact"].map((link) => (
                <li key={link}>
                  <Link href="#" className="hover:text-[#E8834A] transition-colors">{link}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Programs */}
          <div>
            <h4 className="text-white font-bold mb-5 text-sm tracking-wide uppercase">Our Programs</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              {["Robotics & AI", "IoT & Arduino", "After-School Programs", "STEM Lab Setup"].map((prog) => (
                <li key={prog}>
                  <Link href="#" className="hover:text-[#E8834A] transition-colors">{prog}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info — inline SVGs, no image files */}
          <div>
            <h4 className="text-white font-bold mb-5 text-sm tracking-wide uppercase">Contact Info</h4>
            <ul className="space-y-5 text-gray-400 text-sm">
              {contactItems.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="mt-0.5 shrink-0">{item.icon}</div>
                  {item.content}
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Divider + Bottom Bar */}
        <div className="border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center gap-3 text-sm text-gray-500">
          <p>© 2024 Bharat Smart STEM. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-[#E8834A] transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-[#E8834A] transition-colors">Terms of Service</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}