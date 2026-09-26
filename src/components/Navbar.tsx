import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import Logo from "./Logo";

const navLinks = [
  { label: "About Us", href: "/about" },
  { label: "Our Model", href: "/model" },
  { label: "What We Do", href: "/what-we-do" },
  { label: "Our Impact", href: "/impact" },
  { label: "Get Involved", href: "/get-involved" },
  { label: "Join a Course", href: "/join-a-course" },
  { label: "Contact", href: "/contact" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-0 sm:px-6 lg:px-8">
        {/* Logo */}
        <a href="/" className="flex items-center">
          <Logo className="h-36 w-auto" />
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-gray-700 transition hover:text-[#318EC9]"
            >
              {link.label}
            </a>
          ))}

          <a
            href="/get-involved"
            className="rounded-lg bg-[#ED1C24] px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90"
          >
            Support a Mother and Child
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="cursor-pointer rounded-lg p-2 text-gray-700 transition hover:bg-blue-50 hover:text-[#318EC9] lg:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <FiX size={26} /> : <FiMenu size={26} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="border-t border-gray-100 bg-white px-4 pb-5 lg:hidden">
          <div className="flex flex-col gap-1 pt-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="rounded-lg px-3 py-3 text-sm font-medium text-gray-700 hover:bg-blue-50 hover:text-[#318EC9]"
              >
                {link.label}
              </a>
            ))}

            <a
              href="/get-involved"
              onClick={() => setIsOpen(false)}
              className="mt-3 rounded-lg bg-[#ED1C24] px-5 py-3 text-center text-sm font-semibold text-white"
            >
              Support a Mother and Child
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;