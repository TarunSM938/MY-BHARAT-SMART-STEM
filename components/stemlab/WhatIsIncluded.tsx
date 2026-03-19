"use client";

import Image from "next/image";

const cards = [
  {
    image: "/stemlab/robotics.jpg",
    title: "Robotics Kits",
    description: "Age-appropriate robotics sets for hands-on building and programming",
    borderColor: "#F97316",
    objectPosition: "center bottom",
    imageHeight: "200%",
  },
  {
    image: "/stemlab/arduino.jpg",
    title: "Arduino & IoT Kits",
    description: "Full sets of Arduino boards, sensors, components, motors, wires, and project manuals for DIY electronics projects.",
    borderColor: "#0284C7",
    objectPosition: "center top",
    imageHeight: "100%",
  },
  {
    image: "/stemlab/coding.jpg",
    title: "Coding Platforms",
    description: "Access to programming software, learning management system (LMS), and digital curriculum resources.",
    borderColor: "#16A34A",
    objectPosition: "center top",
    imageHeight: "100%",
  },
];

function Card({ card }: { card: typeof cards[0] }) {
  return (
    <div
      style={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        borderRadius: "20px",
        outline: "1px solid #000000",
        background: "#FFFFFF",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
      }}
      onMouseEnter={e => {
        (e.currentTarget as HTMLElement).style.transform = "translateY(-8px)";
        (e.currentTarget as HTMLElement).style.boxShadow = "0px 16px 40px rgba(0,0,0,0.12)";
      }}
      onMouseLeave={e => {
        (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
        (e.currentTarget as HTMLElement).style.boxShadow = "none";
      }}
    >
      {/* Card image */}
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "160px",
          flexShrink: 0,
          borderRadius: "20px 20px 0 0",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: card.imageHeight ?? "100%",
          }}
        >
          <Image
            src={card.image}
            alt={card.title}
            fill
            sizes="(max-width: 768px) 100vw, 365px"
            style={{ objectFit: "cover", objectPosition: card.objectPosition }}
          />
        </div>
      </div>

      {/* Card content */}
      <div
        style={{
          flex: 1,
          padding: "24px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "10px",
          borderBottom: `4px solid ${card.borderColor}`,
          borderRadius: "0 0 20px 20px",
        }}
      >
        <h3
          style={{
            fontFamily: "Inter, sans-serif",
            fontWeight: 700,
            fontSize: "20px",
            lineHeight: "28px",
            color: "#27272A",
            textAlign: "center",
            margin: 0,
            alignSelf: "stretch",
          }}
        >
          {card.title}
        </h3>
        <p
          style={{
            fontFamily: "Inter, sans-serif",
            fontWeight: 400,
            fontSize: "13.8px",
            lineHeight: "23px",
            color: "2C2B2B",
            textAlign: "center",
            margin: 0,
            alignSelf: "stretch",
            letterSpacing: -0.5,
          }}
        >
          {card.description}
        </p>
      </div>
    </div>
  );
}

export default function WhatIsIncluded() {
  return (
    <section
      style={{
        background: "#FFFFFF",
        padding: "180px 159px",
        width: "100%",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          maxWidth: "1122px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          gap: "64px",
        }}
      >
        {/* Header row */}
        <div
          style={{
            width: "100%",
            display: "inline-flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            gap: "24px",
          }}
        >
          {/* Left: tag + heading */}
          <div
            style={{
              width: "552px",
              flexShrink: 0,
              display: "flex",
              flexDirection: "column",
              gap: "24px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", height: "20px" }}>
              <span
                style={{
                  fontFamily: "'IBM Plex Sans Condensed', sans-serif",
                  fontWeight: 500,
                  fontSize: "14px",
                  lineHeight: "20px",
                  color: "#27272A",
                }}
              >
                Everything Delivered. Nothing Left Out.
              </span>
              <div style={{ display: "flex", alignItems: "center", gap: "3px", marginLeft: "8px" }}>
                <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#F97316", display: "inline-block" }} />
                <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#0369A1", display: "inline-block" }} />
                <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#16A34A", display: "inline-block" }} />
              </div>
            </div>

            <h2
              style={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 600,
                fontSize: "48px",
                lineHeight: "48px",
                color: "#27272A",
                margin: 0,
              }}
            >
              What&apos;s included
            </h2>
          </div>

          {/* Right: subtitle */}
          <div
            style={{
              flex: 1,
              minWidth: "420px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
            }}
          >
            <p
              style={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 400,
                fontSize: "20px",
                lineHeight: "32px",
                color: "#2C2B2B",
                margin: 0,
                whiteSpace: "nowrap",
              }}
            >
              A complete end-to-end STEM lab solution for your school.
            </p>
          </div>
        </div>

        {/* Cards grid */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>

          {/* Row 1 */}
          <div style={{ display: "flex", gap: "12px" }}>
            {cards.map((card) => (
              <Card key={card.title + "-row1"} card={card} />
            ))}
          </div>

          {/* Row 2 */}
          <div style={{ display: "flex", gap: "12px" }}>
            {cards.map((card) => (
              <Card key={card.title + "-row2"} card={card} />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}