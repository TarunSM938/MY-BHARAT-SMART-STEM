import WhyChooseUs from "../components/WhyChooseUs";
import TransformSchool from "../components/TransformSchool";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="text-black">

      {/* ===== HERO SECTION ===== */}
      <div className="relative bg-[#f0f9ff] min-h-screen">
        <div
          className="absolute inset-0 z-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-10 pt-20 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2">
            <span className="bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-bold">
              Trusted by 50+ Schools
            </span>
            <h1 className="text-5xl md:text-6xl font-black mt-6 leading-tight text-black">
              Empowering India Through Hands-On STEM Learning
            </h1>
            <p className="text-xl mt-6 text-black">Practical Learning for the Next Generation</p>
            <div className="flex gap-4 mt-10">
              <button className="bg-[#222] text-white px-8 py-4 rounded-xl font-bold hover:scale-105 transition-transform">
                Book a free demo
              </button>
              <button className="border-2 border-gray-300 bg-white/50 px-8 py-4 rounded-xl font-bold hover:bg-white transition-all text-black">
                Partner with us
              </button>
            </div>
          </div>
          <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
            <div className="w-full h-[400px] bg-gray-200 rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
              <div className="flex items-center justify-center h-full text-black italic">
                Main Project Image Placeholder
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ===== TARUN'S SECTIONS ===== */}
      <WhyChooseUs />
      <TransformSchool />

      {/* ===== FOOTER ===== */}
      <Footer />

    </main>
  );
}
