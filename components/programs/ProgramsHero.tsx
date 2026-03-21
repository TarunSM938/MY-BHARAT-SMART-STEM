"use client";

import Image from "next/image";

export default function ProgramsHero() {
  return (
    <section
      style={{
        position: "relative",
        width: "100%",
        minHeight: "656px",
        overflow: "hidden",
        background: "#FFFFFF",
        marginTop: "-180px",
        paddingTop: "180px",
        boxSizing: "border-box",
      }}
    >
      {/* ── Grid background ── */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          pointerEvents: "none",
          backgroundImage:
            "linear-gradient(#E1E1E1 1px, transparent 1px), linear-gradient(90deg, #E1E1E1 1px, transparent 1px)",
          backgroundSize: "48px 32.8px",
        }}
      />

      {/* ── Blur strips ── */}
      <div
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: "1435px",
          height: "96px",
          background: "rgba(246, 132, 31, 0.50)",
          filter: "blur(127.43px)",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />
      {/* Blue – middle */}
      <div
        style={{
          position: "absolute",
          left: 0,
          top: "305.84px",
          width: "1399.77px",
          height: "96px",
          background: "rgba(25, 111, 172, 0.50)",
          filter: "blur(127.43px)",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />
      {/* Green – bottom */}
      <div
        style={{
          position: "absolute",
          left: 0,
          top: "611.67px",
          width: "1431.92px",
          height: "96px",
          background: "rgba(22, 154, 76, 0.50)",
          filter: "blur(127.43px)",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />

      {/* ── Content ── */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: "1344px",
          margin: "0 auto",
          padding: "64px 0 80px",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "48px",
        }}
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
                  padding: "6px 14px",
                  background: "#169A4C",
                  borderRadius: "8px",
                  display: "inline-flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <span
                  style={{
                    color: "#FFFFFF",
                    fontFamily: "Inter, sans-serif",
                    fontSize: "16px",
                    fontWeight: 600,
                    lineHeight: "16px",
                    textTransform: "uppercase",
                    letterSpacing: "0.02em",
                  }}
                >
                  OUR PROGRAMS
                </span>
              </div>

              {/* Heading */}
              <h1
                style={{
                  alignSelf: "stretch",
                  color: "#2C2B2B",
                  fontFamily: "Inter, sans-serif",
                  fontSize: "56px",
                  fontWeight: 600,
                  lineHeight: "56px",
                  letterSpacing: "-0.84px",
                  margin: 0,
                }}
              >
                Complete STEM Programs for Students &amp; Schools
              </h1>

              {/* Subtext */}
              <p
                style={{
                  alignSelf: "stretch",
                  color: "#2C2B2B",
                  fontFamily: "Inter, sans-serif",
                  fontSize: "20px",
                  fontWeight: 400,
                  lineHeight: "24px",
                  margin: 0,
                }}
              >
                Hands-on STEM education designed for modern classrooms and future-ready learning.
              </p>
            </div>
          </div>
        </div>

        {/* Right column – hero image */}
        <div
          style={{
            width: "452px",
            height: "384px",
            flexShrink: 0,
            borderRadius: "20px",
            overflow: "hidden",
            position: "relative",
            background: "rgba(0,0,0,0.2)",
          }}
        >
          <Image
            src="/programs/hero.jpg"
            alt="STEM Programs"
            fill
            style={{ objectFit: "cover", objectPosition: "center" }}
            priority
          />
        </div>
      </div>
    </section>
  );
}