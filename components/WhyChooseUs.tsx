const reasons = [
  {
    number: "01",
    image: "/why-choose/01.png",
    title: "Hands-On Learning, Not Just Theory",
    description:
      "Students learn by building real projects, experiments, and working models — not just reading theory.",
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
      "From curriculum to equipment to training — we handle everything so your school doesn't have to.",
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
      "Flexible pricing and solutions designed for schools of every size and budget.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-[#F4F6F7] py-20 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="grid md:grid-cols-2 gap-10 mb-16">
          <div>
            <div className="flex items-center gap-2 text-xs text-gray-500 font-medium mb-4">
              <span>Practical Learning • Real Skills • Future Ready</span>
              <span className="w-2.5 h-2.5 rounded-full bg-orange-400 inline-block"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-green-400 inline-block"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-blue-400 inline-block"></span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-[#1A1A1A] leading-tight">
              Why Schools Across India Choose Us
            </h2>
          </div>
          <div className="flex items-center">
            <p className="text-gray-500 text-base leading-relaxed">
              We bring world-class STEM education to Indian schools — practical,
              curriculum-aligned, and built for the future.
            </p>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
          {reasons.map((reason) => (
            <div key={reason.number} className="flex gap-6 items-start">

              <div
                className="shrink-0 select-none"
                style={{
                  fontSize: "6rem",
                  fontWeight: 900,
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
              <div className="pt-1">
                <h3 className="text-lg font-bold text-[#1A1A1A] mb-2 leading-snug">
                  {reason.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
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
