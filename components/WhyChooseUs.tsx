const reasons = [
  {
    number: "01",
    image: "/why-choose/01.png",
    title: "Hands-On Learning, Not Just Theory",
    description:
      "Theory  Students learn by building real projects, experiments,  and working  models — not just reading theory.",
  },
  {
    number: "02",
    image: "/why-choose/02.png",
    title: "NEP 2020 & School Curriculum Ready",
    description:
      "Designed to fit CBSE, ICSE, and State Board schools with easy integration into regular classes.",
  },
  {
    number: "03",
    image: "/why-choose/03.jpg",
    title: "One Partner. Complete STEM Solution",
    description:
      "Theory  Students learn by building real projects, experiments,  and working  models — not just reading theory.",
  },
  {
    number: "04",
    image: "/why-choose/04.jpg",
    title: "Skills for the 21st Century",
    description:
      "We develop creativity, problem-solving, teamwork, and innovation along with technical knowledge.",
  },
  {
    number: "05",
    image: "/why-choose/05.jpg",
    title: "Trusted by Schools",
    description:
      "Schools see higher engagement, better STEM performance, and more competition success.",
  },
  {
    number: "06",
    image: "/why-choose/06.jpg",
    title: "Affordable for Every School",
    description:
      "Flexible pricing and solutions designed for schools of every size and  budget.",
  },
];

export default function WhyChooseUs() {
  return (
    <section
      className="bg-[#F4F6F7]"
      style={{
        paddingTop: "180px",
        paddingBottom: "180px",
        paddingLeft: "158px",
        paddingRight: "158px",
      }}
    >
      <div style={{ maxWidth: "1344px", margin: "0 auto" }}>

        {/* Header */}
        <div style={{ marginBottom: "134px" }}>

        
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
                alignSelf: "stretch",
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
              alignSelf: "stretch",
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
            Why Schools Across India<br></br> Choose Us
          </h2>

        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            columnGap: "64px",
            rowGap: "113px",
          }}
        >
          {reasons.map((reason) => (
            <div key={reason.number} style={{ display: "flex", gap: "24px", alignItems: "flex-start" }}>

              <div
                style={{
                  flexShrink: 0,
                  userSelect: "none",
                  fontSize: "6rem",
                  fontWeight: 500,
                  fontFamily: "'Inter', sans-serif",
                  lineHeight: 1,
                  width: "8rem",
                  whiteSpace: "nowrap",
                  backgroundImage: `url(${reason.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  color: "transparent",
                }}
              >
                {reason.number}
              </div>

              {/* Text */}
              <div style={{ paddingTop: "4px" }}>
                {/* Card Title */}
                <h3
                  style={{
                    alignSelf: "stretch",
                    color: "#2C2B2B",
                    fontFamily: "Poppins, sans-serif",
                    fontSize: "32px",
                    fontStyle: "normal",
                    fontWeight: 600,
                    lineHeight: "124%",
                    margin: "0 0 12px 0",
                  }}
                >
                  {reason.title}
                </h3>

                {/* Card Description */}
                <p
                  style={{
                    alignSelf: "stretch",
                    color: "#2C2B2B",
                    fontFamily: "Inter, sans-serif",
                    fontSize: "18px",
                    fontStyle: "normal",
                    fontWeight: 400,
                    lineHeight: "28px",
                    opacity: 0.6,
                    margin: 0,
                  }}
                >
                  {reason.description}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}