import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer
      style={{
        display: "flex",
        width: "100%",
        minHeight: "425px",
        padding: "50px 100px",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "10px",
        background: "#2C2B2B",
        boxSizing: "border-box",
      }}
    >
      <div style={{ width: "100%", maxWidth: "1241px" }}>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr 1fr",
            gap: "40px",
            marginBottom: "40px",
          }}
        >

          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {/* Logo */}
            <div style={{ width: "86px", height: "70px", position: "relative", flexShrink: 0 }}>
              <Image
                src="/logo.png"
                alt="Bharat Smart STEM Logo"
                fill
                style={{ objectFit: "contain", objectPosition: "left" }}
              />
            </div>

            {/* Tagline */}
            <p
              style={{
                color: "#D1D5DB",
                fontFamily: "Inter, sans-serif",
                fontSize: "16px",
                fontWeight: 400,
                lineHeight: "24px",
                letterSpacing: "-0.5px",
                margin: 0,
              }}
            >
              Empowering India&apos;s future through STEM
            </p>

            {/* Social Icons */}
            <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
              {/* Facebook */}
              <a href="#" aria-label="Facebook">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <g clipPath="url(#clip_fb)">
                    <path d="M19.6875 10C19.6875 4.64844 15.3516 0.3125 10 0.3125C4.64844 0.3125 0.3125 4.64844 0.3125 10C0.3125 14.8352 3.85508 18.843 8.48633 19.5703V12.8004H6.02539V10H8.48633V7.86562C8.48633 5.43789 9.93164 4.09687 12.1453 4.09687C13.2055 4.09687 14.3141 4.28594 14.3141 4.28594V6.66875H13.0922C11.8891 6.66875 11.5137 7.41562 11.5137 8.18164V10H14.2004L13.7707 12.8004H11.5137V19.5703C16.1449 18.843 19.6875 14.8352 19.6875 10Z" fill="white"/>
                  </g>
                  <defs><clipPath id="clip_fb"><path d="M0 0H20V20H0V0Z" fill="white"/></clipPath></defs>
                </svg>
              </a>

              {/* X (Twitter) */}
              <a href="#" aria-label="X">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <g clipPath="url(#clip_x)">
                    <path d="M15.1667 2.5H17.5L12.3333 8.33333L18.3333 17.5H13.6667L9.83333 12.1667L5.5 17.5H3.16667L8.66667 11.25L3 2.5H7.83333L11.25 7.41667L15.1667 2.5ZM14.3333 16.1667H15.6667L7.08333 3.83333H5.66667L14.3333 16.1667Z" fill="white"/>
                  </g>
                  <defs><clipPath id="clip_x"><path d="M0 0H20V20H0V0Z" fill="white"/></clipPath></defs>
                </svg>
              </a>

              {/* LinkedIn */}
              <a href="#" aria-label="LinkedIn">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M16.25 0H1.24609C0.558594 0 0 0.566406 0 1.26172V16.2383C0 16.9336 0.558594 17.5 1.24609 17.5H16.25C16.9375 17.5 17.5 16.9336 17.5 16.2383V1.26172C17.5 0.566406 16.9375 0 16.25 0ZM5.28906 15H2.69531V6.64844H5.29297V15H5.28906ZM3.99219 5.50781C3.16016 5.50781 2.48828 4.83203 2.48828 4.00391C2.48828 3.17578 3.16016 2.5 3.99219 2.5C4.82031 2.5 5.49609 3.17578 5.49609 4.00391C5.49609 4.83594 4.82422 5.50781 3.99219 5.50781ZM15.0117 15H12.418V10.9375C12.418 9.96875 12.3984 8.72266 11.0703 8.72266C9.71875 8.72266 9.51172 9.77734 9.51172 10.8672V15H6.91797V6.64844H9.40625V7.78906H9.44141C9.78906 7.13281 10.6367 6.44141 11.8984 6.44141C14.5234 6.44141 15.0117 8.17188 15.0117 10.4219V15Z" fill="white"/>
                </svg>
              </a>

              {/* Instagram */}
              <a href="#" aria-label="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="20" viewBox="0 0 18 20" fill="none">
                  <g clipPath="url(#clip_ig)">
                    <path d="M8.75488 5.50684C6.27051 5.50684 4.2666 7.51074 4.2666 9.99512C4.2666 12.4795 6.27051 14.4834 8.75488 14.4834C11.2393 14.4834 13.2432 12.4795 13.2432 9.99512C13.2432 7.51074 11.2393 5.50684 8.75488 5.50684ZM8.75488 12.9131C7.14941 12.9131 5.83691 11.6045 5.83691 9.99512C5.83691 8.38574 7.14551 7.07715 8.75488 7.07715C10.3643 7.07715 11.6729 8.38574 11.6729 9.99512C11.6729 11.6045 10.3604 12.9131 8.75488 12.9131ZM14.4736 5.32324C14.4736 5.90527 14.0049 6.37012 13.4268 6.37012C12.8447 6.37012 12.3799 5.90137 12.3799 5.32324C12.3799 4.74512 12.8486 4.27637 13.4268 4.27637C14.0049 4.27637 14.4736 4.74512 14.4736 5.32324ZM17.4463 6.38574C17.3799 4.9834 17.0596 3.74121 16.0322 2.71777C15.0088 1.69434 13.7666 1.37402 12.3643 1.30371C10.9189 1.22168 6.58691 1.22168 5.1416 1.30371C3.74316 1.37012 2.50098 1.69043 1.47363 2.71387C0.446289 3.7373 0.129883 4.97949 0.0595703 6.38184C-0.0224609 7.82715 -0.0224609 12.1592 0.0595703 13.6045C0.125977 15.0068 0.446289 16.249 1.47363 17.2725C2.50098 18.2959 3.73926 18.6162 5.1416 18.6865C6.58691 18.7686 10.9189 18.7686 12.3643 18.6865C13.7666 18.6201 15.0088 18.2998 16.0322 17.2725C17.0557 16.249 17.376 15.0068 17.4463 13.6045C17.5283 12.1592 17.5283 7.83105 17.4463 6.38574ZM15.5791 15.1553C15.2744 15.9209 14.6846 16.5107 13.915 16.8193C12.7627 17.2764 10.0283 17.1709 8.75488 17.1709C7.48145 17.1709 4.74316 17.2725 3.59473 16.8193C2.8291 16.5146 2.23926 15.9248 1.93066 15.1553C1.47363 14.0029 1.5791 11.2686 1.5791 9.99512C1.5791 8.72168 1.47754 5.9834 1.93066 4.83496C2.23535 4.06934 2.8252 3.47949 3.59473 3.1709C4.74707 2.71387 7.48145 2.81934 8.75488 2.81934C10.0283 2.81934 12.7666 2.71777 13.915 3.1709C14.6807 3.47559 15.2705 4.06543 15.5791 4.83496C16.0361 5.9873 15.9307 8.72168 15.9307 9.99512C15.9307 11.2686 16.0361 14.0068 15.5791 15.1553Z" fill="white"/>
                  </g>
                  <defs><clipPath id="clip_ig"><path d="M0 0H17.5V20H0V0Z" fill="white"/></clipPath></defs>
                </svg>
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <h4
              style={{
                color: "#FFF",
                fontFamily: "Inter, sans-serif",
                fontSize: "18px",
                fontWeight: 600,
                lineHeight: "28px",
                letterSpacing: "-0.5px",
                margin: 0,
              }}
            >
              Quick Links
            </h4>
            <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "12px" }}>
              {["Home", "About", "Programs", "STEM Lab Setup", "Contact"].map((link) => (
                <li key={link}>
                  <Link
                    href="#"
                    style={{
                      color: "#D1D5DB",
                      fontFamily: "Inter, sans-serif",
                      fontSize: "16px",
                      fontWeight: 400,
                      lineHeight: "20px",
                      letterSpacing: "-0.5px",
                      textDecoration: "none",
                    }}
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Our Programs */}
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <h4
              style={{
                color: "#FFF",
                fontFamily: "Inter, sans-serif",
                fontSize: "18px",
                fontWeight: 600,
                lineHeight: "28px",
                letterSpacing: "-0.5px",
                margin: 0,
              }}
            >
              Our Programs
            </h4>
            <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "12px" }}>
              {["Robotics & AI", "IoT & Arduino", "After-School Programs", "STEM Lab Setup"].map((prog) => (
                <li key={prog}>
                  <Link
                    href="#"
                    style={{
                      color: "#D1D5DB",
                      fontFamily: "Inter, sans-serif",
                      fontSize: "16px",
                      fontWeight: 400,
                      lineHeight: "20px",
                      letterSpacing: "-0.5px",
                      textDecoration: "none",
                    }}
                  >
                    {prog}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact Info */}
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <h4
              style={{
                color: "#FFF",
                fontFamily: "Inter, sans-serif",
                fontSize: "18px",
                fontWeight: 600,
                lineHeight: "28px",
                letterSpacing: "-0.5px",
                margin: 0,
              }}
            >
              Contact Info
            </h4>

            <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "16px" }}>

              {/* Phone */}
              <li style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0 }}>
                  <g clipPath="url(#clip_phone)">
                    <path d="M5.15312 0.769455C4.9125 0.188205 4.27812 -0.12117 3.67188 0.0444546L0.921875 0.794455C0.378125 0.944455 0 1.4382 0 2.0007C0 9.73195 6.26875 16.0007 14 16.0007C14.5625 16.0007 15.0563 15.6226 15.2063 15.0788L15.9563 12.3288C16.1219 11.7226 15.8125 11.0882 15.2312 10.8476L12.2312 9.59758C11.7219 9.38508 11.1313 9.53195 10.7844 9.96008L9.52188 11.5007C7.32188 10.4601 5.54063 8.67883 4.5 6.47883L6.04063 5.21945C6.46875 4.86945 6.61562 4.28195 6.40312 3.77258L5.15312 0.77258V0.769455Z" fill="#D1D5DB"/>
                  </g>
                  <defs><clipPath id="clip_phone"><path d="M0 0H16V16H0V0Z" fill="white"/></clipPath></defs>
                </svg>
                <a
                  href="tel:+919876543210"
                  style={{
                    color: "#D1D5DB",
                    fontFamily: "Inter, sans-serif",
                    fontSize: "16px",
                    fontWeight: 400,
                    lineHeight: "20px",
                    letterSpacing: "-0.5px",
                    textDecoration: "none",
                  }}
                >
                  +91 98765 43210
                </a>
              </li>

              {/* Email */}
              <li style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0 }}>
                  <g clipPath="url(#clip_email)">
                    <path d="M1.5 2C0.671875 2 0 2.67188 0 3.5C0 3.97187 0.221875 4.41562 0.6 4.7L7.4 9.8C7.75625 10.0656 8.24375 10.0656 8.6 9.8L15.4 4.7C15.7781 4.41562 16 3.97187 16 3.5C16 2.67188 15.3281 2 14.5 2H1.5ZM0 5.5V12C0 13.1031 0.896875 14 2 14H14C15.1031 14 16 13.1031 16 12V5.5L9.2 10.6C8.4875 11.1344 7.5125 11.1344 6.8 10.6L0 5.5Z" fill="#D1D5DB"/>
                  </g>
                  <defs><clipPath id="clip_email"><path d="M0 0H16V16H0V0Z" fill="white"/></clipPath></defs>
                </svg>
                <a
                  href="mailto:info@bharatsmartstem.com"
                  style={{
                    color: "#D1D5DB",
                    fontFamily: "Inter, sans-serif",
                    fontSize: "16px",
                    fontWeight: 400,
                    lineHeight: "20px",
                    letterSpacing: "-0.5px",
                    textDecoration: "none",
                  }}
                >
                  info@bharatsmartstem.com
                </a>
              </li>

              {/* Location */}
              <li style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="16" viewBox="0 0 12 16" fill="none" style={{ flexShrink: 0 }}>
                  <g clipPath="url(#clip_loc)">
                    <path d="M6.74062 15.6C8.34375 13.5938 12 8.73125 12 6C12 2.6875 9.3125 0 6 0C2.6875 0 0 2.6875 0 6C0 8.73125 3.65625 13.5938 5.25938 15.6C5.64375 16.0781 6.35625 16.0781 6.74062 15.6ZM6 4C6.53043 4 7.03914 4.21071 7.41421 4.58579C7.78929 4.96086 8 5.46957 8 6C8 6.53043 7.78929 7.03914 7.41421 7.41421C7.03914 7.78929 6.53043 8 6 8C5.46957 8 4.96086 7.78929 4.58579 7.41421C4.21071 7.03914 4 6.53043 4 6C4 5.46957 4.21071 4.96086 4.58579 4.58579C4.96086 4.21071 5.46957 4 6 4Z" fill="#D1D5DB"/>
                  </g>
                  <defs><clipPath id="clip_loc"><path d="M0 0H12V16H0V0Z" fill="white"/></clipPath></defs>
                </svg>
                <span
                  style={{
                    color: "#D1D5DB",
                    fontFamily: "Inter, sans-serif",
                    fontSize: "16px",
                    fontWeight: 400,
                    lineHeight: "20px",
                    letterSpacing: "-0.5px",
                  }}
                >
                  Mumbai, Maharashtra, India
                </span>
              </li>

            </ul>
          </div>

        </div>

        {/* Divider */}
        <div
          style={{
            width: "100%",
            height: "1px",
            background: "#5D5D5D",
            marginBottom: "24px",
          }}
        />

        {/* Bottom Bar */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <p
            style={{
              color: "#9CA3AF",
              fontFamily: "Inter, sans-serif",
              fontSize: "14px",
              fontWeight: 400,
              lineHeight: "20px",
              letterSpacing: "-0.5px",
              margin: 0,
            }}
          >
            © 2024 Bharat Smart STEM. All rights reserved.
          </p>

          <div style={{ display: "flex", gap: "24px" }}>
            <Link
              href="#"
              style={{
                color: "#9CA3AF",
                fontFamily: "Inter, sans-serif",
                fontSize: "14px",
                fontWeight: 400,
                lineHeight: "17px",
                letterSpacing: "-0.5px",
                textDecoration: "none",
              }}
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              style={{
                color: "#9CA3AF",
                fontFamily: "Inter, sans-serif",
                fontSize: "14px",
                fontWeight: 400,
                lineHeight: "17px",
                letterSpacing: "-0.5px",
                textDecoration: "none",
              }}
            >
              Terms of Service
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}