"use client";

const features = [
  "Capacity: 60–80 students per batch",
  "25 Robotics Kits + 20 Arduino Kits + IoT Modules",
  "Complete lab furniture and professional setup",
  "2-year curriculum: Grades 6–10",
  "5-day teacher training for 3 teachers",
  "LMS access + digital resources + support",
  "Investment: ₹[Contact for Pricing]",
];

const packages = [
  {
    id: "basic",
    name: "Basic",
    subtitle: "Starting stem",
    description:
      "The most popular choice for established schools ready to go all-in on STEM",
    price: "₹800",
    popular: false,
    dark: false,
    buttonStyle: "outline",
    checkColor: "#F6841F",
    textColor: "#000000",
    descColor: "#000000",
    bg: "#FFFFFF",
    border: "1px solid #2C2B2B",
  },
  {
    id: "standard",
    name: "Standard",
    subtitle: "STEM Comprehensive",
    description:
      "The most popular choice for established schools ready to go all-in on STEM",
    price: "₹1500",
    popular: true,
    dark: true,
    buttonStyle: "filled",
    checkColor: "#169A4C",
    textColor: "#FFFFFF",
    descColor: "#FFFFFF",
    bg: "#2C2B2B",
    border: "1px solid #F6841F",
  },
  {
    id: "basic2",
    name: "Basic",
    subtitle: "Starting stem",
    description:
      "The most popular choice for established schools ready to go all-in on STEM",
    price: "₹200",
    popular: false,
    dark: false,
    buttonStyle: "outline",
    checkColor: "#F6841F",
    textColor: "#000000",
    descColor: "#000000",
    bg: "#FFFFFF",
    border: "1px solid #2C2B2B",
  },
];

export default function Packages() {
  return (
    <section
      className="w-full flex flex-col items-center justify-center"
      style={{
        background: "#F6841F",
        padding: "80px 133px",
      }}
    >
      {/* Header */}
      <div className="flex flex-col items-center gap-2 mb-12">
        <h2
          className="text-center"
          style={{
            fontFamily: "Poppins, sans-serif",
            fontWeight: 600,
            fontSize: "40px",
            lineHeight: "48px",
            letterSpacing: "-0.003em",
            color: "#FFFFFF",
            margin: 0,
          }}
        >
          Choose your package
        </h2>
        <p
          className="text-center"
          style={{
            fontFamily: "Inter, sans-serif",
            fontWeight: 400,
            fontSize: "24px",
            lineHeight: "28px",
            letterSpacing: "-0.5px",
            color: "#FFFFFF",
            margin: 0,
          }}
        >
          Three Packages. One Perfect Fit.
        </p>
      </div>

      {/* Cards */}
      <div
        className="flex flex-col md:flex-row items-center justify-center gap-5 w-full"
        style={{ maxWidth: "1166px" }}
      >
        {packages.map((pkg) => (
          <div
            key={pkg.id}
            className="flex flex-col justify-between transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl"
            style={{
              background: pkg.bg,
              border: pkg.border,
              borderRadius: "20px",
              padding: "0 16px 16px",
              width: "100%",
              maxWidth: "376px",
              minHeight: pkg.popular ? "598px" : "562px",
              position: "relative",
            }}
          >
            {/* Most Popular badge */}
            {pkg.popular && (
              <div className="flex justify-center w-full" style={{ marginBottom: "0px" }}>
                <div
                  className="flex items-center justify-center px-4 py-1.5"
                  style={{
                    background: "#169A4C",
                    borderRadius: "8px",
                    marginTop: "0px",
                    position: "relative",
                    top: "-1px",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontWeight: 600,
                      fontSize: "16px",
                      letterSpacing: "-0.005em",
                      color: "#FFFFFF",
                      textTransform: "uppercase",
                    }}
                  >
                    MOST POPULAR
                  </span>
                </div>
              </div>
            )}

            {!pkg.popular && <div style={{ height: "20px" }} />}

            <div className="flex flex-col gap-2 mb-2">
              <span
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: 700,
                  fontSize: "36px",
                  lineHeight: "32px",
                  color: pkg.textColor,
                }}
              >
                {pkg.name}
              </span>
              <span
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: 600,
                  fontSize: "24px",
                  lineHeight: "20px",
                  letterSpacing: "0.288px",
                  color: pkg.textColor,
                }}
              >
                {pkg.subtitle}
              </span>
            </div>

            {/* Description */}
            <p
              style={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 400,
                fontSize: "18px",
                lineHeight: "28px",
                color: pkg.descColor,
                opacity: 0.8,
                margin: "12px 0",
              }}
            >
              {pkg.description}
            </p>

            {/* Price */}
            <p
              style={{
                fontFamily: "Poppins, sans-serif",
                fontWeight: 600,
                fontSize: "48px",
                lineHeight: "110%",
                letterSpacing: "-0.24px",
                color: pkg.textColor,
                margin: "8px 0 16px",
              }}
            >
              {pkg.price}
            </p>

            {/* Button */}
            <button
              className="w-full uppercase font-semibold transition-opacity hover:opacity-90"
              style={{
                fontFamily: "Poppins, sans-serif",
                fontWeight: 600,
                fontSize: "16px",
                lineHeight: "18px",
                letterSpacing: "-0.24px",
                height: "46px",
                borderRadius: "8px",
                cursor: "pointer",
                ...(pkg.buttonStyle === "filled"
                  ? {
                      background: "#F6841F",
                      color: "#FFFFFF",
                      border: "none",
                    }
                  : {
                      background: "transparent",
                      color: "#F6841F",
                      border: "1px solid #F6841F",
                    }),
              }}
            >
              REQUEST A PROPOSAL
            </button>

            {/* Divider */}
            <div
              className="w-full my-4"
              style={{
                height: "1px",
                background: pkg.dark ? "rgba(255,255,255,0.23)" : "rgba(0,0,0,0.23)",
              }}
            />

            {/* Feature list */}
            <div className="flex flex-col gap-1.5">
              {features.map((feature, i) => (
                <div key={i} className="flex flex-row items-start gap-2">
                  {/* Check icon */}
                  {pkg.dark ? (
                    
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      style={{ marginTop: "4px", flexShrink: 0 }}
                    >
                      <circle cx="8" cy="8" r="8" fill="#169A4C" />
                      <path
                        d="M4.5 8L7 10.5L11.5 6"
                        stroke="#FFFFFF"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  ) : (
                    
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      style={{ marginTop: "2px", flexShrink: 0 }}
                    >
                      <circle
                        cx="10"
                        cy="10"
                        r="9"
                        stroke="#F6841F"
                        strokeWidth="1.5"
                      />
                      <path
                        d="M6.5 10L9 12.5L13.5 7.5"
                        stroke="#F6841F"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                  <span
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontWeight: 400,
                      fontSize: "14px",
                      lineHeight: "24px",
                      color: pkg.dark ? "#FFFFFF" : "#000000",
                    }}
                  >
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}