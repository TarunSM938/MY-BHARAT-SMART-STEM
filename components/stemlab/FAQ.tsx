"use client";

import { useState } from "react";

const faqs = [
  {
    question: "How much space do we need for a STEM lab?",
    answer: "A standard classroom size is enough. We design the lab based on available space.",
  },
  {
    question: "Do we need our own teacher?",
    answer: "No, you don't! We provide a fully trained STEM teacher as part of our packages. They manage all lab sessions, curriculum delivery, and student engagement — so your school doesn't need to hire anyone separately.",
  },
  {
    question: "Is the equipment covered under warranty?",
    answer: "Yes, all equipment comes with a manufacturer warranty, and we offer additional maintenance support. Any defective component is repaired or replaced promptly to ensure uninterrupted lab operations.",
  },
  {
    question: "How long does the setup take?",
    answer: "From initial consultation to full lab launch, the process typically takes 4–6 weeks. This includes needs assessment, customised planning, physical installation, and teacher onboarding.",
  },
  {
    question: "Is the curriculum included?",
    answer: "Absolutely. A structured, age-appropriate curriculum covering robotics, IoT, coding, and more is included with all packages. It is aligned with national education standards and designed for hands-on learning.",
  },
  {
    question: "Which classes can use the STEM lab?",
    answer: "The STEM lab is designed to cater to students from Grade 1 to Grade 12. The curriculum is tiered by grade group, ensuring each session is engaging and appropriately challenging for every age group.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      style={{
        width: "1440px",
        maxWidth: "100%",
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
        {/* ── Header ── */}
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
              flex: 1,
              height: "128px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
            }}
          >
            {/* Left: tag + heading */}
            <div
              style={{
                width: "577px",
                height: "128px",
                display: "inline-flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "flex-start",
                gap: "24px",
              }}
            >
              {/* Tag row */}
              <div
                style={{
                  alignSelf: "stretch",
                  height: "20px",
                  display: "inline-flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                }}
              >
                <span
                  style={{
                    width: "286px",
                    textAlign: "center",
                    color: "#27272A",
                    fontSize: "14px",
                    fontWeight: 500,
                    fontFamily: "'IBM Plex Sans Condensed', sans-serif",
                    lineHeight: "20px",
                    whiteSpace: "nowrap",
                  }}
                >
                  A simple, structured, and risk-free process.
                </span>
                <div style={{ display: "flex", alignItems: "center", gap: "3px" }}>
                  <span style={{ width: "10px", height: "10px", background: "#F97316", borderRadius: "50%", display: "inline-block" }} />
                  <span style={{ width: "10px", height: "10px", background: "#0369A1", borderRadius: "50%", display: "inline-block" }} />
                  <span style={{ width: "10px", height: "10px", background: "#16A34A", borderRadius: "50%", display: "inline-block" }} />
                </div>
              </div>

              {/* FAQ heading */}
              <h2
                style={{
                  alignSelf: "stretch",
                  color: "#27272A",
                  fontSize: "48px",
                  fontWeight: 600,
                  fontFamily: "Inter, sans-serif",
                  lineHeight: "48px",
                  margin: 0,
                }}
              >
                FAQ
              </h2>
            </div>

            {/* Right: subtitle */}
            <div
              style={{
                display: "inline-flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "flex-start",
                gap: "24px",
              }}
            >
              <p
                style={{
                  width: "384px",
                  color: "#27272A",
                  fontSize: "20px",
                  fontWeight: 400,
                  fontFamily: "Inter, sans-serif",
                  lineHeight: "32px",
                  margin: 0,
                  whiteSpace: "nowrap",
                }}
              >
                From Consultation to Launch in 6–8 Weeks
              </p>
            </div>
          </div>
        </div>

        {/* ── Accordion ── */}
        <div
          style={{
            width: "1119px",
            display: "flex",
            flexDirection: "column",
            gap: "16px",
          }}
        >
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                onMouseEnter={() => setOpenIndex(index)}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                style={{
                  position: "relative",
                  width: "1119px",
                  borderRadius: "8px",
                  border: "1px solid #000000",
                  borderBottom: isOpen ? "4px solid #F6841F" : "1px solid #000000",
                  background: "#FFFFFF",
                  cursor: "pointer",
                  boxSizing: "border-box",
                  overflow: "hidden",
                  transition: "border-bottom 0.2s",
                }}
              >
                <div
                  style={{
                    width: "1101px",
                    margin: "10px",
                    display: "inline-flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                  }}
                >
                  {/* Question + answer stacked */}
                  <div style={{ flex: 1 }}>
                    {/* Question */}
                    <div
                      style={{
                        color: "#2C2B2B",
                        fontSize: "20px",
                        fontWeight: 700,
                        fontFamily: "Inter, sans-serif",
                        lineHeight: "28px",
                      }}
                    >
                      {faq.question}
                    </div>

                    {/* Answer — slides open */}
                    <div
                      style={{
                        maxHeight: isOpen ? "200px" : "0px",
                        overflow: "hidden",
                        transition: "max-height 0.35s ease",
                      }}
                    >
                      <div
                        style={{
                          color: "#27272A",
                          fontSize: "14px",
                          fontWeight: 400,
                          fontFamily: "Inter, sans-serif",
                          lineHeight: "24px",
                          marginTop: "8px",
                        }}
                      >
                        {faq.answer}
                      </div>
                    </div>
                  </div>

                  {/* Icon */}
                  <div style={{ padding: "8px" }}>
                    {isOpen ? (
                      /* ✕ cross SVG */
                      <svg width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.36971 1.29971C8.44137 1.23056 8.49855 1.14783 8.5379 1.05634C8.57725 0.964857 8.59798 0.866452 8.59889 0.766868C8.5998 0.667285 8.58088 0.568516 8.54321 0.476327C8.50554 0.384137 8.44989 0.300372 8.37951 0.22992C8.30912 0.159467 8.22541 0.103738 8.13325 0.0659841C8.0411 0.02823 7.94235 0.00920731 7.84276 0.0100254C7.74318 0.0108435 7.64476 0.0314862 7.55323 0.0707492C7.46171 0.110012 7.37893 0.167109 7.30971 0.238708L4.30371 3.24371L1.29871 0.238708C1.23005 0.165022 1.14725 0.105919 1.05525 0.0649275C0.963247 0.0239355 0.863934 0.0018935 0.763231 0.00011672C0.662528 -0.00166006 0.562499 0.0168648 0.469111 0.0545858C0.375723 0.0923068 0.290889 0.148451 0.21967 0.21967C0.148451 0.290889 0.0923068 0.375722 0.0545858 0.46911C0.0168648 0.562499 -0.00166006 0.662528 0.00011672 0.763231C0.0018935 0.863934 0.0239355 0.963247 0.0649275 1.05525C0.105919 1.14725 0.165022 1.23005 0.238708 1.29871L3.24171 4.30471L0.236709 7.30971C0.104229 7.45188 0.0321051 7.63993 0.0355333 7.83423C0.0389615 8.02853 0.117674 8.21392 0.255087 8.35133C0.3925 8.48874 0.577885 8.56745 0.772186 8.57088C0.966487 8.57431 1.15453 8.50219 1.29671 8.36971L4.30371 5.36471L7.30871 8.37071C7.45088 8.50319 7.63893 8.57531 7.83323 8.57188C8.02753 8.56846 8.21292 8.48974 8.35033 8.35233C8.48774 8.21492 8.56645 8.02953 8.56988 7.83523C8.57331 7.64093 8.50119 7.45288 8.36871 7.31071L5.36571 4.30471L8.36971 1.29971Z" fill="black"/>
                      </svg>
                    ) : (
                      /* chevron pointing down */
                      <svg
                        width="12"
                        height="8"
                        viewBox="0 0 12 8"
                        fill="none"
                      >
                        <path
                          d="M1 1L6 6L11 1"
                          stroke="#000000"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}