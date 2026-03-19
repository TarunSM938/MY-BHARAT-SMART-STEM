const steps = [
  {
    number: "01",
    title: "Free Consultation & Needs Assessment",
    description: "We visit your school, understand your goals, check space, and suggest the best STEM lab plan. No cost. No obligation.",
    dot: "#F6841F",
    bg: "rgba(246, 132, 31, 0.2)",
    left: 48.77,
    top: 0,
    rotate: "7.22deg",
  },
  {
    number: "02",
    title: "Customised Proposal & Planning",
    description: "You receive a complete plan with lab design, equipment list, curriculum, timeline, and pricing. Clear. Transparent. Tailored.",
    dot: "#196FAC",
    bg: "rgba(25, 111, 172, 0.2)",
    left: 723,
    top: 233.53,
    rotate: "-7.74deg",
  },
  {
    number: "03",
    title: "Lab Setup & Installation (Weeks 3–6)",
    description: "We handle full lab setup — furniture, kits, software, safety, and testing. Ready-to-use STEM lab in a few weeks.",
    dot: "#169A4C",
    bg: "rgba(22, 154, 76, 0.2)",
    left: 57.12,
    top: 525.16,
    rotate: "7.22deg",
  },
  {
    number: "04",
    title: "Trained STEM Teacher Provided by Us",
    description: "We provide our own trained STEM teacher for your school. No hiring. No training. No extra workload for your staff.",
    dot: "#F6841F",
    bg: "rgba(246, 132, 31, 0.2)",
    left: 668.5,
    top: 781.12,
    rotate: "-7.74deg",
  },
  {
    number: "05",
    title: "Launch & Ongoing Support (Week 8+)",
    description: "We help you launch the lab and provide continuous support, updates, and assistance whenever needed.",
    dot: "#196FAC",
    bg: "#DDEAF3",
    left: 57.12,
    top: 1045.16,
    rotate: "7.22deg",
  },
];

const lines = [
  { width: 747.31, left: 183, top: 220, rotate: "17.68deg" },
  { width: 725.29, left: 231, top: 668, rotate: "30.49deg" },
  { width: 681.98, left: 253, top: 876, rotate: "-38.98deg" },
  { width: 725.29, left: 299.44, top: 1324.64, rotate: "-34.35deg" },
];

function StepCard({ step }: { step: typeof steps[0] }) {
  return (
    <div
      style={{
        position: "absolute",
        left: step.left,
        top: step.top,
        width: "384px",
        transform: `rotate(${step.rotate})`,
        background: "#FFFFFF",
        borderRadius: "20px",
        boxShadow: "0px 4px 4px rgba(0,0,0,0.25)",
        display: "inline-flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        alignItems: "center",
        gap: "10px",
        padding: "14px 14px 10px",
        boxSizing: "border-box",
      }}
    >
      {/* Outer dot ring */}
      <div
        style={{
          width: "56px",
          height: "56px",
          borderRadius: "50%",
          background: "rgba(212,212,212,0.3)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Inner dot */}
        <div
          style={{
            width: "28px",
            height: "28px",
            borderRadius: "50%",
            background: step.dot,
          }}
        />
      </div>

      {/* Content box */}
      <div
        style={{
          alignSelf: "stretch",
          background: step.bg,
          borderRadius: "20px",
          padding: "10px",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        <div
          style={{
            display: "inline-flex",
            alignItems: "flex-start",
            gap: "24px",
            alignSelf: "stretch",
          }}
        >
          <div
            style={{
              flex: 1,
              display: "inline-flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "16px",
            }}
          >
            {/* Step number */}
            <span
              style={{
                fontFamily: "Poppins, sans-serif",
                fontWeight: 500,
                fontSize: "48px",
                lineHeight: "58.3px",
                color: "#000000",
              }}
            >
              {step.number}
            </span>

            {/* Title + description */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "12px",
                alignSelf: "stretch",
              }}
            >
              <h3
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: 600,
                  fontSize: "30px",
                  lineHeight: "40px",
                  color: "#2C2B2B",
                  margin: 0,
                  alignSelf: "stretch",
                }}
              >
                {step.title}
              </h3>
              <p
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 400,
                  fontSize: "17.5px",
                  lineHeight: "26px",
                  color: "#2C2B2B",
                  opacity: 0.6,
                  margin: 0,
                  alignSelf: "stretch",
                }}
              >
                {step.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ImplementationProcess() {
  return (
    <section style={{ background: "#FAFAFA", padding: "180px 0 204px" }}>
      <div style={{ maxWidth: "1179px", margin: "0 auto", padding: "0 48px" }}>

        {/* Header */}
        <div
          style={{
            alignSelf: "stretch",
            height: "128px",
            display: "inline-flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            width: "100%",
            marginBottom: "121px",
          }}
        >
          {/* Left: tag + heading */}
          <div
            style={{
              width: "577px",
              display: "inline-flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "24px",
            }}
          >
            <div style={{ display: "inline-flex", alignItems: "center", height: "20px", alignSelf: "stretch" }}>
              <span
                style={{
                  fontFamily: "'IBM Plex Sans Condensed', sans-serif",
                  fontWeight: 500,
                  fontSize: "14px",
                  lineHeight: "20px",
                  color: "#27272A",
                  width: "290px",
                  textAlign: "center",
                }}
              >
                A simple, structured, and risk-free process.
              </span>
              <div style={{ display: "flex", alignItems: "center", gap: "3px", marginLeft: "4px" }}>
                <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#F6841F", display: "inline-block" }} />
                <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#196FAC", display: "inline-block" }} />
                <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#169A4C", display: "inline-block" }} />
              </div>
            </div>

            <h2
              style={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 600,
                fontSize: "48px",
                lineHeight: "48px",
                color: "#2C2B2B",
                margin: 0,
                alignSelf: "stretch",
              }}
            >
              Implementation process
            </h2>
          </div>

          {/* Right: subtitle */}
          <div style={{ display: "inline-flex", flexDirection: "column", alignItems: "flex-start", gap: "24px" }}>
            <p
              style={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 400,
                fontSize: "20px",
                lineHeight: "32px",
                color: "#2C2B2B",
                margin: 0,
                width: "280px",
                whiteSpace: "nowrap",
              }}
            >
              From Consultation to Launch in 6-8 Weeks
            </p>
          </div>
        </div>

        {/* Canvas */}
        <div style={{ position: "relative", width: "1163px", height: "1450px" }}>

          {/* Dashed connector lines */}
          <svg
            viewBox="0 0 1163 1450"
            xmlns="http://www.w3.org/2000/svg"
            style={{ position: "absolute", top: 0, left: 0, width: "1163px", height: "1450px", zIndex: 0 }}
          >
            {lines.map((l, i) => {
              const rad = (parseFloat(l.rotate) * Math.PI) / 180;
              const x2 = l.left + l.width * Math.cos(rad);
              const y2 = l.top + l.width * Math.sin(rad);
              return (
                <line
                  key={i}
                  x1={l.left} y1={l.top}
                  x2={x2} y2={y2}
                  stroke="#C7C0C0"
                  strokeWidth="3"
                  strokeDasharray="7 7"
                  strokeLinecap="round"
                />
              );
            })}
          </svg>

          {/* Step cards */}
          <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zIndex: 1 }}>
            {steps.map((step) => (
              <StepCard key={step.number} step={step} />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}