import Image from "next/image";

export default function TransformSchool() {
  const partnerCards = [
    { title: "Become our Franchise", image: "/transform/franchise.jpg", alt: "School classroom" },
    { title: "Become our school partner", image: "/transform/partner.jpg", alt: "Handshake partnership" },
    { title: "Upgrade your coaching into AI hub", image: "/transform/ai-hub.jpg", alt: "Smart city AI hub" },
  ];

  return (
    <>
      {/* ===== TRANSFORM SECTION ===== */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2 text-xs text-gray-500 font-medium">
                <span>Practical Learning • Real Skills • Future Ready</span>
                <span className="w-2.5 h-2.5 rounded-full bg-orange-400 inline-block"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-green-400 inline-block"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-blue-400 inline-block"></span>
              </div>
              <p className="text-gray-400 text-sm text-right">
                Practical Learning for the Next Generation
              </p>
            </div>
            <h2 className="text-2xl md:text-3xl font-black text-[#1A1A1A] leading-tight max-w-lg">
              Transform Your School as AI-Drone-Robotics School
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {partnerCards.map((card) => (
              <div key={card.title} className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:-translate-y-1 transition-transform duration-300 group">
                <div className="relative w-full aspect-[4/3] overflow-hidden">
                  <Image src={card.image} alt={card.alt} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="px-5 py-4 bg-white">
                  <p className="text-sm font-semibold text-[#1A1A1A] text-center">{card.title}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center">
            <button className="bg-[#E8834A] text-white px-10 py-3 rounded-full font-semibold text-sm hover:bg-[#d4743b] transition-colors">
              Partner with us
            </button>
          </div>
        </div>
      </section>

      {/* ===== CTA BANNER ===== */}
      <section
        className="relative overflow-hidden py-20 px-6 text-center"
        style={{ background: "linear-gradient(160deg, #fde8d8 0%, #dff0f7 100%)" }}
      >
        {/* Grid overlay */}
        <div
          className="absolute inset-0 z-0 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,0,0,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.06) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        <div className="relative z-10 flex flex-col items-center">

          <div className="relative mb-5 flex justify-center">
            <div
              className="absolute"
              style={{
                width: "70px",
                height: "70px",
                mixBlendMode: "multiply",
                top: "-83px",
                left: "-15px",
                transform: "rotate(-48deg)",
                transformOrigin: "bottom right",
              }}
            >
              <Image
                src="/mascot.png"
                alt="Graduation cap mascot"
                width={58}
                height={58}
                className="object-contain w-full h-full"
              />
            </div>

            <h2
              className="font-black text-[#1A1A1A] leading-tight text-center"
              style={{ fontSize: "clamp(1.2rem, 2.6vw, 2.1rem)", whiteSpace: "nowrap", paddingLeft: "32px" }}
            >
              Bring Future-Ready STEM Learning to Your School
            </h2>
          </div>

          <p className="text-gray-500 text-base mb-8">
            Schedule a free demo and see our programs in action.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-7">
            <button className="bg-[#E8834A] text-white px-8 py-3 rounded-lg font-semibold text-sm hover:bg-[#d4743b] transition-colors shadow-sm">
              Schedule free demo
            </button>
            <button className="border-2 border-gray-700 text-gray-800 bg-transparent px-8 py-3 rounded-lg font-semibold text-sm hover:bg-white/40 transition-colors">
              Download brochure
            </button>
          </div>

          {/* Call Us */}
          <div className="flex items-center justify-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#E8834A" className="w-4 h-4 shrink-0">
              <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24 11.47 11.47 0 0 0 3.59.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.59a1 1 0 0 1-.25 1.01z" />
            </svg>
            <p className="text-sm text-gray-700">
              Call Us:{" "}
              <a href="tel:+919876543210" className="text-[#1A1A1A] font-semibold underline underline-offset-2 hover:text-[#E8834A] transition-colors">
                +91 98765 43210
              </a>
            </p>
          </div>

        </div>
      </section>
    </>
  );
}
