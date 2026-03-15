const OrangeDot = () => (
  <svg width="58" height="61" viewBox="0 0 58 61" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g filter="url(#od)">
      <circle cx="29.0027" cy="27.944" r="25" transform="rotate(7.22072 29.0027 27.944)" fill="#D9D9D9" fillOpacity="0.3"/>
      <circle cx="29.0656" cy="27.4481" r="12.5" transform="rotate(7.22072 29.0656 27.4481)" fill="#F6841F"/>
    </g>
    <defs>
      <filter id="od" x="0" y="2.941" width="58.005" height="58.005" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="4"/><feGaussianBlur stdDeviation="2"/>
        <feComposite in2="hardAlpha" operator="out"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
      </filter>
    </defs>
  </svg>
);

const BlueDot = () => (
  <svg width="58" height="62" viewBox="0 0 58 62" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g filter="url(#bd)">
      <circle cx="29.0031" cy="28.1383" r="25" transform="rotate(-7.73773 29.0031 28.1383)" fill="#D9D9D9" fillOpacity="0.3"/>
      <circle cx="28.9359" cy="27.6429" r="12.5" transform="rotate(-7.73773 28.9359 27.6429)" fill="#196FAC"/>
    </g>
    <defs>
      <filter id="bd" x="0" y="3.135" width="58.006" height="58.006" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="4"/><feGaussianBlur stdDeviation="2"/>
        <feComposite in2="hardAlpha" operator="out"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
      </filter>
    </defs>
  </svg>
);

const GreenDot = () => (
  <svg width="58" height="61" viewBox="0 0 58 61" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g filter="url(#gd)">
      <circle cx="29.0028" cy="27.9438" r="25" transform="rotate(7.22 29.0028 27.9438)" fill="#D9D9D9" fillOpacity="0.3"/>
      <circle cx="29.0657" cy="27.4477" r="12.5" transform="rotate(7.22 29.0657 27.4477)" fill="#169A4C"/>
    </g>
    <defs>
      <filter id="gd" x="0" y="2.941" width="58.005" height="58.005" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="4"/><feGaussianBlur stdDeviation="2"/>
        <feComposite in2="hardAlpha" operator="out"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
      </filter>
    </defs>
  </svg>
);

const steps = [
  {
    number: "01",
    title: "Free Consultation & Needs Assessment",
    description: "We visit your school, understand your goals, check space, and suggest the best STEM lab plan. No cost. No obligation.",
    bg: "rgba(246, 132, 31, 0.15)",
    dot: <OrangeDot />,
    rotate: "8.78deg",
    top: 0,
    left: 0,
  },
  {
    number: "02",
    title: "Customised Proposal & Planning",
    description: "You receive a complete plan with lab design, equipment list, curriculum, timeline, and pricing. Clear. Transparent. Tailored.",
    bg: "rgba(25, 111, 172, 0.15)",
    dot: <BlueDot />,
    rotate: "-11.26deg",
    top: 179,
    left: 723,
  },
  {
    number: "03",
    title: "Lab Setup & Installation (Weeks 3–6)",
    description: "We handle full lab setup — furniture, kits, software, safety, and testing. Ready-to-use STEM lab in a few weeks.",
    bg: "rgba(22, 154, 76, 0.15)",
    dot: <GreenDot />,
    rotate: "7.78deg",
    top: 525,
    left: 6,
  },
  {
    number: "04",
    title: "Trained STEM Teacher Provided by Us",
    description: "We provide our own trained STEM teacher for your school. No hiring. No training. No extra workload for your staff.",
    bg: "rgba(246, 132, 31, 0.15)",
    dot: <OrangeDot />,
    rotate: "-11.26deg",
    top: 727,
    left: 669,
  },
  {
    number: "05",
    title: "Launch & Ongoing Support (Week 8+)",
    description: "We help you launch the lab and provide continuous support, updates, and assistance whenever needed.",
    bg: "#DDEAF3",
    dot: <BlueDot />,
    rotate: "6.78deg",
    top: 1045,
    left: 6,
  },
];

const lines = [
  { x1: 202, y1: 200, x2: 925, y2: 382 },
  { x1: 925, y1: 382, x2: 208, y2: 728 },
  { x1: 208, y1: 728, x2: 871, y2: 930 },
  { x1: 871, y1: 930, x2: 208, y2: 1248 },
];

function StepCard({ step }: { step: typeof steps[0] }) {
  return (
    <div
      style={{
        position: "absolute",
        top: step.top,
        left: step.left,
        width: 405,
        borderRadius: "20px",
        background: "#FFFFFF",
        boxShadow: "0px 4px 4px rgba(0,0,0,0.25)",
        transform: `rotate(${step.rotate})`,
        padding: "10px 15px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "10px",
        boxSizing: "border-box",
      }}
    >
      <div style={{ flexShrink: 0 }}>
        {step.dot}
      </div>

      <div
        style={{
          background: step.bg,
          borderRadius: "20px",
          padding: "12px 16px",
          width: "100%",
        }}
      >
        <p style={{ fontFamily: "Poppins, sans-serif", fontWeight: 500, fontSize: "53px", lineHeight: "110%", color: "#000", margin: "0 0 8px 0" }}>
          {step.number}
        </p>
        <h3 style={{ fontFamily: "Poppins, sans-serif", fontWeight: 600, fontSize: "24px", lineHeight: "124%", color: "#2C2B2B", margin: "0 0 12px 0" }}>
          {step.title}
        </h3>
        <p style={{ fontFamily: "Inter, sans-serif", fontWeight: 400, fontSize: "15px", lineHeight: "26px", color: "#2C2B2B", opacity: 0.6, margin: 0 }}>
          {step.description}
        </p>
      </div>
    </div>
  );
}

export default function ImplementationProcess() {
  return (
    <section style={{ background: "#FAFAFA", padding: "100px 0 120px" }}>
      <div style={{ maxWidth: "1179px", margin: "0 auto", padding: "0 48px" }}>

        {/* Header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "80px", gap: "24px", flexWrap: "wrap" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "16px", maxWidth: "577px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <span style={{ fontFamily: "Inter, sans-serif", fontWeight: 500, fontSize: "14px", color: "#2C2B2B" }}>
                A simple, structured, and risk-free process.
              </span>
              <span style={{ display: "inline-block", width: "10px", height: "10px", borderRadius: "50%", background: "#F6841F" }} />
              <span style={{ display: "inline-block", width: "10px", height: "10px", borderRadius: "50%", background: "#196FAC" }} />
              <span style={{ display: "inline-block", width: "10px", height: "10px", borderRadius: "50%", background: "#169A4C" }} />
            </div>
            <h2 style={{ fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: "48px", lineHeight: "100%", letterSpacing: "-0.72px", color: "#2C2B2B", margin: 0 }}>
              Implementation process
            </h2>
          </div>
          <p style={{ fontFamily: "Inter, sans-serif", fontWeight: 400, fontSize: "21px", lineHeight: "150%", color: "#2C2B2B", margin: 0, maxWidth: "422px" }}>
            From Consultation to Launch in 6–8 Weeks
          </p>
        </div>

        {/* Canvas */}
        <div style={{ position: "relative", width: "1163px", height: "1500px" }}>

          <svg
            viewBox="0 0 1163 1500"
            xmlns="http://www.w3.org/2000/svg"
            style={{ position: "absolute", top: 0, left: 0, width: "1163px", height: "1500px", zIndex: 0 }}
          >
            {lines.map((l, i) => (
              <line
                key={i}
                x1={l.x1} y1={l.y1}
                x2={l.x2} y2={l.y2}
                stroke="#C7C0C0"
                strokeWidth="3"
                strokeDasharray="7 7"
                strokeLinecap="round"
              />
            ))}
          </svg>

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