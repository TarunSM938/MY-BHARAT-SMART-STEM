export default function Navbar() {
  return (
    <header className="w-full flex justify-center pt-6">
      <nav className="w-[90%] bg-[#E9E4DD] border border-black rounded-xl px-8 py-4 flex items-center justify-between">

        {/* Logo */}
        <div className="text-xl font-bold">
          BHARATH SMART STEM
        </div>

        {/* Links */}
        <ul className="flex gap-10 font-medium text-gray-800">
          <li className="cursor-pointer">Home</li>
          <li className="cursor-pointer">About</li>
          <li className="cursor-pointer">Program</li>
          <li className="cursor-pointer">STEM Lab Setup</li>
        </ul>

        {/* Button */}
        <button className="bg-black text-white px-6 py-2 rounded-lg">
          Contact Us
        </button>

      </nav>
    </header>
  );
}