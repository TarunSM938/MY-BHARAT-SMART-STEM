import Image from "next/image";

export default function StemLabHero() {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ background: "#FFFFFF", marginTop: "-180px", paddingTop: "180px" }}
    >
      {/* Grid background */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#E1E1E1 1px, transparent 1px), linear-gradient(90deg, #E1E1E1 1px, transparent 1px)",
          backgroundSize: "48px 32.8px",
        }}
      />

      {/* Blur strips */}
      <div className="absolute left-0 pointer-events-none z-0" style={{ top: "0px", width: "1435px", height: "96px", background: "rgba(246, 132, 31, 0.5)", filter: "blur(127.43px)" }} />
      <div className="absolute left-0 pointer-events-none z-0" style={{ top: "305.84px", width: "1399.77px", height: "96px", background: "rgba(25, 111, 172, 0.5)", filter: "blur(127.43px)" }} />
      <div className="absolute left-0 pointer-events-none z-0" style={{ top: "611.67px", width: "1431.92px", height: "96px", background: "rgba(22, 154, 76, 0.5)", filter: "blur(127.43px)" }} />

      {/* Content */}
      <div
        className="relative z-10 flex flex-row items-center justify-between mx-auto px-0 py-16"
        style={{ maxWidth: "1344px", gap: "48px" }}
      >
        {/* Left column */}
        <div
          style={{
            width: "621px",
            flexShrink: 0,
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            gap: "40px",
          }}
        >
          <div
            style={{
              alignSelf: "stretch",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              gap: "32px",
            }}
          >
            <div
              style={{
                alignSelf: "stretch",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "flex-start",
                gap: "16px",
              }}
            >
              {/* Badge */}
              <div
                style={{
                  background: "#169A4C",
                  padding: "6px 14px",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "0px",
                }}
              >
                <span
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontWeight: 600,
                    fontSize: "16px",
                    lineHeight: "16px",
                    color: "#FFFFFF",
                    textTransform: "uppercase",
                  }}
                >
                  STEM LAB SETUP FOR SCHOOLS
                </span>
              </div>

              {/* Heading */}
              <h1
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 600,
                  fontSize: "56px",
                  lineHeight: "56px",
                  letterSpacing: "-0.84px",
                  color: "#2C2B2B",
                  margin: 0,
                  alignSelf: "stretch",
                }}
              >
                Transform Your School with a World-Class<br></br> STEM Lab
              </h1>

              {/* Subtext */}
              <p
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 400,
                  fontSize: "20px",
                  lineHeight: "25.2px",
                  color: "#2C2B2B",
                  margin: 0,
                  alignSelf: "stretch",
                  letterSpacing: -0.315,
                }}
              >
                We design, install, and manage fully equipped STEM labs with
                robotics, electronics, coding, curriculum, and a trained teacher
                everything included.
              </p>
            </div>

            {/* CTA Buttons */}
            <div style={{ display: "inline-flex", justifyContent: "flex-start", alignItems: "center", gap: "16px" }}>
              <button
                style={{
                  height: "44px",
                  padding: "16px 28px",
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: 600,
                  fontSize: "16px",
                  lineHeight: "16px",
                  textTransform: "uppercase",
                  color: "#FFFFFF",
                  background: "#F97316",
                  borderRadius: "8px",
                  border: "none",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                GET A LAB PROPOSAL
              </button>

              <button
                style={{
                  padding: "14px 24px",
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: 600,
                  fontSize: "16px",
                  lineHeight: "16px",
                  textTransform: "uppercase",
                  color: "#2C2B2B",
                  background: "transparent",
                  borderRadius: "8px",
                  outline: "1px solid #2C2B2B",
                  outlineOffset: "-1px",
                  border: "none",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                BOOK A SCHOOL VISIT
              </button>
            </div>
          </div>
        </div>

        {/* Right column — hero image + floating chips */}
        <div
          style={{
            position: "relative",
            width: "390px",
            height: "367px",
            flexShrink: 0,
            flexGrow: 0,
          }}
        >
          {/* Hero image */}
          <div
            className="absolute overflow-hidden"
            style={{ width: "390px", height: "367px", right: 0, top: "8px", borderRadius: "20px" }}
          >
            <Image
              src="/stemlab/hero.jpg"
              alt="STEM Lab"
              fill
              className="object-cover"
              style={{ filter: "brightness(0.8)" }}
            />
          </div>

          {/* Chip: 4–6 Week Installation */}
          <div
            className="absolute flex items-center justify-center z-10"
            style={{
              background: "#FFFFFF",
              boxShadow: "0px 4px 4px rgba(246, 132, 31, 0.5)",
              borderRadius: "8px",
              top: "0px",
              left: "-80px",
              whiteSpace: "nowrap",
              padding: "8px 14px",
            }}
          >
            <span style={{ fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: "16px", lineHeight: "16px", color: "#000000" }}>
              4-6 Week installation
            </span>
          </div>

          {/* Chip: Teacher Provided */}
          <div
            className="absolute flex items-center justify-center z-10"
            style={{
              background: "#2C2B2B",
              boxShadow: "0px 4px 4px rgba(22, 154, 76, 0.5)",
              borderRadius: "8px",
              bottom: "90px",
              left: "-70px",
              whiteSpace: "nowrap",
              padding: "8px 14px",
            }}
          >
            <span style={{ fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: "16px", lineHeight: "16px", color: "#FFFFFF" }}>
              Teacher provided
            </span>
          </div>

          {/* Chip: Full Support Included */}
          <div
            className="absolute flex items-center justify-center z-10"
            style={{
              background: "#196FAC",
              boxShadow: "-1px 4px 9px 0px rgba(246,132,31,0.10), -5px 15px 16px 0px rgba(246,132,31,0.09)",
              borderRadius: "8px",
              bottom: "0px",
              right: "-10px",
              whiteSpace: "nowrap",
              padding: "8px 14px",
            }}
          >
            <span style={{ fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: "16px", lineHeight: "16px", color: "#FFFFFF" }}>
              Full support included
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}