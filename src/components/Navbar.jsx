import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed right-4 top-4 z-50 flex h-10 w-10 items-center justify-center rounded-md bg-gray-800 text-white shadow-lg lg:hidden"
      >
        {isOpen ? <X size={22} /> : <Menu size={22} />}
      </button>

      {/* Desktop Vertical Navbar */}
      <div className="fixed right-0 top-0 z-50 hidden h-full w-14 flex-col items-center justify-center space-y-12 bg-gray-800 text-white lg:flex">
        {navLinks.map((link, index) => (
          <a
            key={index}
            href={link.href}
            className="rotate-90 text-sm transition hover:text-blue-400"
          >
            {link.name}
          </a>
        ))}
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`fixed right-7 top-10 z-40 w-44 rounded-xl border border-white/10 bg-gray-800 p-10 text-white shadow-xl transition-all duration-300 lg:hidden ${
          isOpen
            ? "translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-3 opacity-0"
        }`}
      >
        <div className="flex flex-col gap-4">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-sm transition hover:text-blue-400"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </>
  );
}

export default Navbar;