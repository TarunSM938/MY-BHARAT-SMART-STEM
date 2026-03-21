"use client";

import Image from "next/image";

const programs = [
  {
    title: "Robotics &\nIoT & Arduino DIY Program",
    description:
      "Age-appropriate robotics sets for hands-on building and programming",
    image: "/programs/robotics.jpg",
  },
  {
    title: "IoT & Arduino DIY Program",
    description:
      "Age-appropriate robotics sets for hands-on building and programming",
    image: "/programs/iot.jpg",
  },
  {
    title: "After-School Programs & Competition Coaching",
    description:
      "Age-appropriate robotics sets for hands-on building and programming",
    image: "/programs/afterschool.jpg",
  },
];

export default function ChooseYourProgram() {
  return (
    <section
      style={{
        width: "100%",
        padding: "176px 160px",
        background: "#FFFFFF",
        boxSizing: "border-box",
        display: "inline-flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "10px",
      }}
    >
      <div
        style={{
          alignSelf: "stretch",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          gap: "64px",
        }}
      >
        {/* Header */}
        <div
          style={{
            width: "1122px",
            display: "inline-flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
          }}
        >
          <div
            style={{
              width: "552px",
              display: "inline-flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              gap: "24px",
            }}
          >
            <div
              style={{
                height: "20px",
                display: "inline-flex",
                justifyContent: "flex-start",
                alignItems: "center",
              }}
            >
              <span
                style={{
                  color: "#27272A",
                  fontFamily: "'IBM Plex Sans Condensed', sans-serif",
                  fontSize: "14px",
                  fontWeight: 500,
                  lineHeight: "20px",
                  width: "110px",
                  textAlign: "center",
                }}
              >
                Our programs
              </span>
              <div style={{ display: "flex", alignItems: "center", gap: "3px" }}>
                <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#F6841F", display: "inline-block" }} />
                <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#196FAC", display: "inline-block" }} />
                <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#169A4C", display: "inline-block" }} />
              </div>
            </div>
            <h2
              style={{
                color: "#27272A",
                fontFamily: "Inter, sans-serif",
                fontSize: "48px",
                fontWeight: 600,
                lineHeight: "48px",
                margin: 0,
              }}
            >
              Choose your program
            </h2>
          </div>

          {/* Right: subtitle*/}
          <div
            style={{
              flex: 1,
              display: "inline-flex",
              flexDirection: "column",
              justifyContent: "flex-end",
              alignItems: "flex-end",
              gap: "34px",
            }}
          >
            <p
              style={{
                alignSelf: "stretch",
                color: "#27272A",
                fontFamily: "Inter, sans-serif",
                fontSize: "20px",
                fontWeight: 400,
                lineHeight: "32px",
                margin: 0,
                textAlign: "right",
              }}
            >
              A complete end-to-end STEM lab solution for your school.
            </p>
          </div>
        </div>

        {/* Cards row */}
        <div
          style={{
            display: "inline-flex",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            gap: "12px",
          }}
        >
          {programs.map((program, index) => (
            <ProgramCard key={index} program={program} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProgramCard({
  program,
}: {
  program: { title: string; description: string; image: string };
}) {
  return (
    <div
      style={{
        width: "384px",
        display: "inline-flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        cursor: "pointer",
        position: "relative",
      }}
    >
      {/* Border box*/}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: "80px",
          borderRadius: "20px",
          outline: "1px solid #000000",
          outlineOffset: "-1px",
          background: "#FFFFFF",
          zIndex: 1,
          transition: "box-shadow 0.3s ease, outline 0.3s ease",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLDivElement).style.boxShadow =
            "0px 0px 0px 3px rgba(246,132,31,1.00)";
          (e.currentTarget as HTMLDivElement).style.outline =
            "1px solid #F6841F";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
          (e.currentTarget as HTMLDivElement).style.outline =
            "1px solid #000000";
        }}
      />

      {/* Text area */}
      <div
        style={{
          alignSelf: "stretch",
          padding: "24px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          gap: "10px",
          minHeight: "160px",
          position: "relative",
          zIndex: 2,
        }}
      >
        <h3
          style={{
            alignSelf: "stretch",
            textAlign: "center",
            color: "#27272A",
            fontFamily: "Inter, sans-serif",
            fontSize: "20px",
            fontWeight: 700,
            lineHeight: "28px",
            margin: 0,
            whiteSpace: "pre-line",
          }}
        >
          {program.title}
        </h3>
        <p
          style={{
            alignSelf: "stretch",
            textAlign: "center",
            color: "#27272A",
            fontFamily: "Inter, sans-serif",
            fontSize: "14px",
            fontWeight: 400,
            lineHeight: "24px",
            margin: 0,
          }}
        >
          {program.description}
        </p>
      </div>

      {/* Ghost 1 */}
      <div
        style={{
          width: "291px",
          height: "16px",
          background: "#D9D9D9",
          borderRadius: "12px 12px 0 0",
          alignSelf: "center",
          position: "relative",
          zIndex: 2,
        }}
      />
      {/* Ghost 2 */}
      <div
        style={{
          width: "332px",
          height: "16px",
          background: "#E6E6E6",
          borderRadius: "12px 12px 0 0",
          alignSelf: "center",
          position: "relative",
          zIndex: 2,
          marginTop: "-2px",
        }}
      />

      {/* Image */}
      <div
        style={{
          alignSelf: "stretch",
          height: "164px",
          minHeight: "164px",
          maxHeight: "164px",
          position: "relative",
          zIndex: 3,
          borderRadius: "0 0 20px 20px",
          overflow: "hidden",
          marginTop: "-2px",
          flexShrink: 0,
        }}
      >
        <Image
          src={program.image}
          alt={program.title}
          fill
          sizes="384px"
          style={{ objectFit: "cover", objectPosition: "center" }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "12px",
            right: "12px",
            width: "56px",
            height: "56px",
            borderRadius: "50%",
            background: "#FFFFFF",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 4,
          }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17 7L7 17M7 17H17M7 17V7" stroke="#000000" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </div>
  );
}