"use client";

export default function StemLabCTA() {
  return (
    <section
      style={{
        width: "100%",
        height: "384px",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        gap: "208px",
        boxSizing: "border-box",
      }}
    >
      {/* ── Blur strips ── */}
      <div
        style={{
          width: "100%",
          height: "96px",
          background: "rgba(246, 132, 31, 0.5)",
          filter: "blur(127.43px)",
          flexShrink: 0,
        }}
      />
      <div
        style={{
          width: "100%",
          height: "96px",
          background: "rgba(25, 111, 172, 0.5)",
          filter: "blur(127.43px)",
          flexShrink: 0,
        }}
      />
      <div
        style={{
          width: "100%",
          height: "96px",
          background: "rgba(22, 154, 76, 0.5)",
          filter: "blur(127.43px)",
          flexShrink: 0,
        }}
      />

      {/* ── Grid overlay ── */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          pointerEvents: "none",
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.06) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* ── Content ── */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            width: "984px",
            height: "288px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: "888px",
              display: "inline-flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "center",
              gap: "32px",
            }}
          >
            {/* Top block */}
            <div
              style={{
                alignSelf: "stretch",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "center",
                gap: "32px",
              }}
            >
              {/* Heading + subtitle */}
              <div
                style={{
                  alignSelf: "stretch",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                <h2
                  style={{
                    alignSelf: "stretch",
                    textAlign: "center",
                    color: "#27272A",
                    fontSize: "36px",
                    fontWeight: 700,
                    fontFamily: "Poppins, sans-serif",
                    lineHeight: "40px",
                    margin: 0,
                  }}
                >
                  Ready to Build Your School&apos;s STEM Legacy?
                </h2>
                <p
                  style={{
                    alignSelf: "stretch",
                    textAlign: "center",
                    color: "#27272A",
                    fontSize: "20px",
                    fontWeight: 400,
                    fontFamily: "Inter, sans-serif",
                    lineHeight: "28px",
                    margin: 0,
                  }}
                >
                  Get a Lab Proposal
                </p>
              </div>

              {/* Buttons */}
              <div
                style={{
                  display: "inline-flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  gap: "16px",
                }}
              >
                <button
                  style={{
                    height: "44px",
                    padding: "16px 28px",
                    background: "#F97316",
                    borderRadius: "8px",
                    border: "none",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "10px",
                    cursor: "pointer",
                    transition: "opacity 0.2s",
                  }}
                  onMouseEnter={e => (e.currentTarget.style.opacity = "0.9")}
                  onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
                >
                  <span
                    style={{
                      color: "#FFFFFF",
                      fontSize: "16px",
                      fontWeight: 600,
                      fontFamily: "Poppins, sans-serif",
                      textTransform: "uppercase",
                      lineHeight: "16px",
                    }}
                  >
                    GET A LAB PROPOSAL
                  </span>
                </button>

                <button
                  style={{
                    padding: "14px 24px",
                    borderRadius: "8px",
                    outline: "1px solid #27272A",
                    outlineOffset: "-1px",
                    background: "transparent",
                    border: "none",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "10px",
                    cursor: "pointer",
                    transition: "opacity 0.2s",
                  }}
                  onMouseEnter={e => (e.currentTarget.style.opacity = "0.7")}
                  onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
                >
                  <span
                    style={{
                      color: "#27272A",
                      fontSize: "16px",
                      fontWeight: 600,
                      fontFamily: "Poppins, sans-serif",
                      textTransform: "uppercase",
                      lineHeight: "16px",
                    }}
                  >
                    BOOK A SCHOOL VISIT
                  </span>
                </button>
              </div>
            </div>

            {/* Call Us row */}
            <div
              style={{
                display: "inline-flex",
                justifyContent: "flex-start",
                alignItems: "center",
                gap: "5px",
              }}
            >
              {/* Phone icon */}
              <div
                style={{
                  width: "24px",
                  height: "24px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <g clipPath="url(#clip_cta_phone)">
                    <path d="M5.15312 0.769455C4.9125 0.188205 4.27812 -0.12117 3.67188 0.0444546L0.921875 0.794455C0.378125 0.944455 0 1.4382 0 2.0007C0 9.73195 6.26875 16.0007 14 16.0007C14.5625 16.0007 15.0563 15.6226 15.2063 15.0788L15.9563 12.3288C16.1219 11.7226 15.8125 11.0882 15.2312 10.8476L12.2312 9.59758C11.7219 9.38508 11.1313 9.53195 10.7844 9.96008L9.52188 11.5007C7.32188 10.4601 5.54063 8.67883 4.5 6.47883L6.04063 5.21945C6.46875 4.86945 6.61562 4.28195 6.40312 3.77258L5.15312 0.77258V0.769455Z" fill="#F89D4B"/>
                  </g>
                  <defs>
                    <clipPath id="clip_cta_phone">
                      <path d="M0 0H16V16H0V0Z" fill="white"/>
                    </clipPath>
                  </defs>
                </svg>
              </div>

              {/* Call text + underline */}
              <div
                style={{
                  width: "192px",
                  display: "inline-flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "flex-end",
                  gap: "1px",
                }}
              >
                <span
                  style={{
                    alignSelf: "stretch",
                    textAlign: "center",
                    color: "#2C2B2B",
                    fontSize: "16px",
                    fontWeight: 400,
                    fontFamily: "Inter, sans-serif",
                    lineHeight: "24px",
                    letterSpacing: "-0.5px",
                  }}
                >
                  Call Us: +91 98765 43210
                </span>
                {/* Underline */}
                <div
                  style={{
                    width: "120px",
                    height: "0px",
                    outline: "1px solid #000000",
                    outlineOffset: "-0.5px",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}