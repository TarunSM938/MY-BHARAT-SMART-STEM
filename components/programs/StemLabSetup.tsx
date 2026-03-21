"use client";

const cards = [
  {
    number: "01",
    title: "Turnkey STEM Lab with Equipment & Curriculum",
    borderColor: "#196FAC",
  },
  {
    number: "02",
    title: "Our Trained STEM Teacher at Your School",
    borderColor: "#F6841F",
  },
  {
    number: "03",
    title: "Full Setup, Training & Ongoing Support",
    borderColor: "#169A4C",
  },
];

export default function StemLabSetup() {
  return (
    <section
      style={{
        width: "100%",
        padding: "176px 160px",
        background: "#FFFFFF",
        boxSizing: "border-box",
        display: "inline-flex",
        justifyContent: "flex-start",
        alignItems: "flex-start",
      }}
    >
      <div
        style={{
          width: "1139px",
          display: "inline-flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          gap: "48px",
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
          {/* Tag + Heading */}
          <div
            style={{
              width: "657px",
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
                  width: "120px",
                  textAlign: "center",
                }}
              >
                STEM Lab setup
              </span>
              <div style={{ display: "flex", alignItems: "center", gap: "3px" }}>
                <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#F6841F", display: "inline-block" }} />
                <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#196FAC", display: "inline-block" }} />
                <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#169A4C", display: "inline-block" }} />
              </div>
            </div>

            <h2
              style={{
                alignSelf: "stretch",
                color: "#27272A",
                fontFamily: "Inter, sans-serif",
                fontSize: "48px",
                fontWeight: 600,
                lineHeight: "48px",
                margin: 0,
              }}
            >
              Complete STEM Lab Setup<br />for Schools
            </h2>
          </div>

          {/* Subtitle */}
          <p
            style={{
              color: "#27272A",
              fontFamily: "Inter, sans-serif",
              fontSize: "20px",
              fontWeight: 400,
              lineHeight: "32px",
              margin: 0,
            }}
          >
            Transform Your School with a Modern STEM Lab.
          </p>
        </div>

        {/* Cards */}
        <div
          style={{
            alignSelf: "stretch",
            display: "inline-flex",
            justifyContent: "flex-start",
            alignItems: "stretch",
            gap: "32px",
          }}
        >
          {cards.map((card) => (
            <div
              key={card.number}
              style={{
                flex: 1,
                borderRadius: "20px",
                borderTop: "1px solid #000000",
                borderLeft: "1px solid #000000",
                borderRight: "1px solid #000000",
                borderBottom: `4px solid ${card.borderColor}`,
                padding: "24px",
                display: "flex",
                alignItems: "flex-start",
                gap: "32px",
              }}
            >
              <span
                style={{
                  color: "#27272A",
                  fontFamily: "Poppins, sans-serif",
                  fontSize: "24px",
                  fontWeight: 600,
                  lineHeight: "28px",
                  flexShrink: 0,
                }}
              >
                {card.number}
              </span>
              <span
                style={{
                  flex: 1,
                  color: "#27272A",
                  fontFamily: "Poppins, sans-serif",
                  fontSize: "24px",
                  fontWeight: 600,
                  lineHeight: "28px",
                }}
              >
                {card.title}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}