import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import Logo from "./Logo";

const navLinks = [
  { label: "Home", href: "/" },
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

  const currentPath = window.location.pathname;

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">

        {/* Logo */}
        <a
          href="/"
          aria-label="THEHASA Foundation home"
          className="shrink-0"
        >
          <Logo />
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => {
            const isActive =
              link.href === "/"
                ? currentPath === "/"
                : currentPath.startsWith(link.href);

            return (
              <a
                key={link.label}
                href={link.href}
                className={`relative py-2 text-sm font-medium transition-colors duration-200 ${
                  isActive
                    ? "text-[#318EC9]"
                    : "text-gray-700 hover:text-[#318EC9]"
                }`}
              >
                {link.label}

                {/* Active indicator */}
                <span
                  className={`absolute bottom-0 left-0 h-0.5 rounded-full bg-[#318EC9] transition-all duration-200 ${
                    isActive ? "w-full" : "w-0"
                  }`}
                />
              </a>
            );
          })}

          {/* Primary CTA */}
          <a
            href="/get-involved"
            className="rounded-lg bg-[#ED1C24] px-5 py-3 text-sm font-semibold text-white transition hover:bg-red-700"
          >
            Support a Mother and Child
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          className="cursor-pointer rounded-lg p-2 text-gray-700 transition hover:bg-blue-50 hover:text-[#318EC9] lg:hidden"
        >
          {isOpen ? (
            <FiX size={24} />
          ) : (
            <FiMenu size={24} />
          )}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="border-t border-gray-100 bg-white lg:hidden">
          <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => {
                const isActive =
                  link.href === "/"
                    ? currentPath === "/"
                    : currentPath.startsWith(link.href);

                return (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`rounded-lg px-4 py-3 text-sm font-medium transition ${
                      isActive
                        ? "bg-blue-50 text-[#318EC9]"
                        : "text-gray-700 hover:bg-blue-50 hover:text-[#318EC9]"
                    }`}
                  >
                    {link.label}
                  </a>
                );
              })}

              <a
                href="/get-involved"
                onClick={() => setIsOpen(false)}
                className="mt-2 rounded-lg bg-[#ED1C24] px-4 py-3 text-center text-sm font-semibold text-white transition hover:bg-red-700"
              >
                Support a Mother and Child
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;