"use client";

import Image from "next/image";

export default function TransformSchool() {
  const partnerCards = [
    { title: "Become our Franchise", image: "/transform/franchise.jpg", alt: "School classroom" },
    { title: "Become our school partner", image: "/transform/partner.jpg", alt: "Handshake partnership" },
    { title: "Upgrade your coaching into AI hub", image: "/transform/ai-hub.jpg", alt: "Smart city AI hub" },
  ];

  return (
    <>
      {/* ===== TRANSFORM SECTION ===== */}
      <section
        style={{
          display: "flex",
          width: "100%",
          padding: "180px 10px",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "32px",
          background: "#FFF",
          boxSizing: "border-box",
        }}
      >
        
        <div
          style={{
            display: "flex",
            width: "1240px",
            maxWidth: "100%",
            flexDirection: "column",
            alignItems: "center",
            gap: "134px",
          }}
        >

        {/* Header */}
        <div style={{ width: "100%" }}>

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: "16px",
            }}
          >
            
            <div
              style={{
                display: "flex",
                height: "20px",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <span
                style={{
                  color: "#2C2B2B",
                  fontFamily: "'IBM Plex Sans Condensed', sans-serif",
                  fontSize: "14px",
                  fontStyle: "normal",
                  fontWeight: 500,
                  lineHeight: "20px",
                  letterSpacing: "-0.15px",
                  whiteSpace: "nowrap",
                }}
              >
                Practical Learning • Real Skills • Future Ready
              </span>
             
              <div style={{ display: "flex", alignItems: "center", gap: "3px" }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none" style={{ flexShrink: 0 }}>
                  <circle cx="5" cy="5" r="5" fill="#F6841F"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none" style={{ flexShrink: 0 }}>
                  <circle cx="5" cy="5" r="5" fill="#196FAC"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none" style={{ flexShrink: 0 }}>
                  <circle cx="5" cy="5" r="5" fill="#169A4C"/>
                </svg>
              </div>
            </div>

            <p
              style={{
                color: "#2C2B2B",
                fontFamily: "Inter, sans-serif",
                fontSize: "21px",
                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: "150%",
                letterSpacing: "-0.315px",
                margin: 0,
                textAlign: "left",
              }}
            >
              Practical Learning for the Next Generation
            </p>
          </div>

          <h2
            style={{
              color: "#2C2B2B",
              fontFamily: "Inter, sans-serif",
              fontSize: "48px",
              fontStyle: "normal",
              fontWeight: 600,
              lineHeight: "100%",
              letterSpacing: "-0.72px",
              margin: 0,
            }}
          >
            Transform Your School as<br/>AI-Drone-Robotics School
          </h2>
        </div>

        <div
          style={{
            display: "flex",
            width: "1240px",
            maxWidth: "100%",
            alignItems: "center",
            gap: "48px",
          }}
        >
          {partnerCards.map((card) => (
            <div
              key={card.title}
              style={{
                display: "flex",
                width: "381px",
                height: "350px",
                alignItems: "flex-start",
                gap: "10px",
                flexShrink: 0,
                borderRadius: "20px",
                border: "1px solid #000",
                overflow: "hidden",
                flexDirection: "column",
                transition: "transform 0.3s",
              }}
              onMouseEnter={e => (e.currentTarget as HTMLDivElement).style.transform = "translateY(-4px)"}
              onMouseLeave={e => (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)"}
            >
              <div
                style={{
                  position: "relative",
                  height: "234px",
                  alignSelf: "stretch",
                  borderRadius: "20px 20px 0 0",
                  overflow: "hidden",
                  flexShrink: 0,
                }}
              >
                <Image
                  src={card.image}
                  alt={card.alt}
                  fill
                  style={{ objectFit: "cover", objectPosition: "center" }}
                />
              </div>

              <div
                style={{
                  display: "flex",
                  height: "90px",
                  padding: "36px 39px",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: "10px",
                  flexShrink: 0,
                  alignSelf: "stretch",
                  borderRadius: "0 0 20px 20px",
                  background: "#FFFEFB",
                  boxSizing: "border-box",
                }}
              >
                <p
                  style={{
                    alignSelf: "stretch",
                    color: "#2C2B2B",
                    textAlign: "center",
                    fontFamily: "Inter, sans-serif",
                    fontSize: "20px",
                    fontStyle: "normal",
                    fontWeight: 700,
                    lineHeight: "28px",
                    letterSpacing: "-0.5px",
                    margin: 0,
                  }}
                >
                  {card.title}
                </p>
              </div>
            </div>
          ))}
        </div>

        </div>

        {/* Partner with us Button */}
        <button
          style={{
            display: "flex",
            height: "46px",
            padding: "16px 28px",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
            flexShrink: 0,
            borderRadius: "8px",
            background: "#F6841F",
            border: "none",
            cursor: "pointer",
            color: "#FFFFFF",
            fontFamily: "Poppins, sans-serif",
            fontSize: "16px",
            fontWeight: 600,
            letterSpacing: "-0.015em",
            transition: "opacity 0.2s",
          }}
          onMouseEnter={e => (e.currentTarget as HTMLButtonElement).style.opacity = "0.9"}
          onMouseLeave={e => (e.currentTarget as HTMLButtonElement).style.opacity = "1"}
        >
          Partner with us
        </button>

      </section>

      {/* ===== CTA BANNER ===== */}
      <section
        style={{
          position: "relative",
          display: "flex",
          width: "100%",
          height: "450px",
          padding: "38px 180px",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "10px",
          overflow: "hidden",
          boxSizing: "border-box",
          background: "linear-gradient(180deg, rgba(248, 222, 197, 0.7) 0%, rgba(200,220,240,0.6) 100%)",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 0,
            pointerEvents: "none",
            backgroundImage:
              "linear-gradient(rgba(0,0,0,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.07) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />

        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "101.945px",
            background: "rgba(246, 132, 31, 0.50)",
            filter: "blur(127.432px)",
            zIndex: 0,
            pointerEvents: "none",
          }}
        />

        <div
          style={{
            position: "relative",
            zIndex: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "32px",
            alignSelf: "stretch",
            paddingTop: "50px",
          }}
        >
          <div style={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "center" }}>
            {/* Mascot */}
            <div
              style={{
                position: "absolute",
                width: "86px",
                height: "86px",
                transform: "rotate(-55.467deg)",
                left: "-80px",
                top: "-55px",
                flexShrink: 0,
              }}
            >
              <Image
                src="/mascot.png"
                alt="Graduation cap mascot"
                width={86}
                height={86}
                style={{ objectFit: "cover", objectPosition: "center", width: "100%", height: "100%" }}
              />
            </div>

            {/* Heading */}
            <h2
              style={{
                alignSelf: "stretch",
                color: "#2C2B2B",
                textAlign: "center",
                fontFamily: "Poppins, sans-serif",
                fontSize: "36px",
                fontStyle: "normal",
                fontWeight: 700,
                lineHeight: "40px",
                letterSpacing: "-0.5px",
                margin: 0,
              }}
            >
              Bring Future-Ready STEM Learning to Your School
            </h2>
          </div>

          {/* Subtext */}
          <p
            style={{
              alignSelf: "stretch",
              color: "#2C2B2B",
              textAlign: "center",
              fontFamily: "Inter, sans-serif",
              fontSize: "20px",
              fontStyle: "normal",
              fontWeight: 400,
              lineHeight: "28px",
              letterSpacing: "-0.5px",
              margin: 0,
            }}
          >
            Schedule a free demo and see our programs in action.
          </p>

          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            {/* Schedule free demo */}
            <button
              style={{
                display: "flex",
                padding: "14px 26px",
                justifyContent: "center",
                alignItems: "center",
                gap: "10px",
                borderRadius: "8px",
                background: "#F6841F",
                border: "none",
                cursor: "pointer",
                color: "#FFF",
                fontFamily: "Poppins, sans-serif",
                fontSize: "16px",
                fontStyle: "normal",
                fontWeight: 600,
                lineHeight: "18px",
                letterSpacing: "-0.08px",
                transition: "opacity 0.2s",
              }}
              onMouseEnter={e => (e.currentTarget as HTMLButtonElement).style.opacity = "0.9"}
              onMouseLeave={e => (e.currentTarget as HTMLButtonElement).style.opacity = "1"}
            >
              Schedule free demo
            </button>

            {/* Download brochure */}
            <button
              style={{
                display: "flex",
                padding: "14px 26px",
                justifyContent: "center",
                alignItems: "center",
                gap: "10px",
                borderRadius: "8px",
                border: "1px solid #2C2B2B",
                background: "transparent",
                cursor: "pointer",
                color: "#2C2B2B",
                fontFamily: "Poppins, sans-serif",
                fontSize: "16px",
                fontStyle: "normal",
                fontWeight: 600,
                lineHeight: "18px",
                letterSpacing: "-0.08px",
                transition: "opacity 0.2s",
              }}
              onMouseEnter={e => (e.currentTarget as HTMLButtonElement).style.opacity = "0.7"}
              onMouseLeave={e => (e.currentTarget as HTMLButtonElement).style.opacity = "1"}
            >
              Download brochure
            </button>
          </div>

          {/* Call Us */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px" }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0 }}>
              <g clipPath="url(#clip0_1_2138)">
                <path d="M5.15312 0.769455C4.9125 0.188205 4.27812 -0.12117 3.67188 0.0444546L0.921875 0.794455C0.378125 0.944455 0 1.4382 0 2.0007C0 9.73195 6.26875 16.0007 14 16.0007C14.5625 16.0007 15.0563 15.6226 15.2063 15.0788L15.9563 12.3288C16.1219 11.7226 15.8125 11.0882 15.2312 10.8476L12.2312 9.59758C11.7219 9.38508 11.1313 9.53195 10.7844 9.96008L9.52188 11.5007C7.32188 10.4601 5.54063 8.67883 4.5 6.47883L6.04063 5.21945C6.46875 4.86945 6.61562 4.28195 6.40312 3.77258L5.15312 0.77258V0.769455Z" fill="#F89D4B"/>
              </g>
              <defs>
                <clipPath id="clip0_1_2138">
                  <path d="M0 0H16V16H0V0Z" fill="white"/>
                </clipPath>
              </defs>
            </svg>
            <p
              style={{
                alignSelf: "stretch",
                color: "#2C2B2B",
                textAlign: "center",
                fontFamily: "Inter, sans-serif",
                fontSize: "16px",
                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: "24px",
                letterSpacing: "-0.5px",
                margin: 0,
              }}
            >
              Call Us:{" "}
              <a
                href="tel:+919876543210"
                style={{
                  color: "#2C2B2B",
                  fontWeight: 600,
                  textDecoration: "underline",
                  textUnderlineOffset: "2px",
                }}
              >
                +91 98765 43210
              </a>
            </p>
          </div>

        </div>
      </section>
    </>
  );
}