import { useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { FiChevronDown, FiMenu, FiX } from "react-icons/fi";
import Logo from "./Logo";



const aboutLinks = [
  { label: "Our Story", href: "/about/our-story" },
  { label: "Our Team & Governance", href: "/about/team" },
  { label: "Who We Serve", href: "/about/who-we-serve" },
];

const impactLinks = [
  { label: "News & Stories", href: "/impact/news-stories" },
  {
    label: "Partners & Sustainability",
    href: "/impact/partners-sustainability",
  },
];

const navLinksBeforeImpact = [
  { label: "Our Model", href: "/model" },
  { label: "What We Do", href: "/what-we-do" },
];

const navLinksAfterImpact = [
  { label: "Get Involved", href: "/get-involved" },
  { label: "Join a Course", href: "/join-a-course" },
  { label: "Contact", href: "/contact" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [impactOpen, setImpactOpen] = useState(false);

  const location = useLocation();

  const isAboutActive = location.pathname.startsWith("/about");
  const isImpactActive = location.pathname.startsWith("/impact");

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">

        {/* Logo */}
        <Link
          to="/"
          aria-label="THEHASA Foundation home"
          className="shrink-0"
        >
          <Logo />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-7 lg:flex">

          {/* Home */}
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `relative py-2 text-sm font-medium transition-colors duration-200 ${
                isActive
                  ? "text-[#318EC9]"
                  : "text-gray-700 hover:text-[#318EC9]"
              }`
            }
          >
            {({ isActive }) => (
              <>
                Home
                <span
                  className={`absolute bottom-0 left-0 h-0.5 rounded-full bg-[#318EC9] transition-all duration-200 ${
                    isActive ? "w-full" : "w-0"
                  }`}
                />
              </>
            )}
          </NavLink>

          {/* About Us Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setAboutOpen(true)}
            onMouseLeave={() => setAboutOpen(false)}
          >
            <div className="flex items-center">
              <Link
                to="/about"
                className={`relative flex items-center gap-1 py-2 text-sm font-medium transition-colors duration-200 ${
                  isAboutActive
                    ? "text-[#318EC9]"
                    : "text-gray-700 hover:text-[#318EC9]"
                }`}
              >
                About Us

                <span className={aboutOpen ? "rotate-180" : ""}>
                  <FiChevronDown size={16} />
                </span>

                <span
                  className={`absolute bottom-0 left-0 h-0.5 rounded-full bg-[#318EC9] transition-all duration-200 ${
                    isAboutActive ? "w-full" : "w-0"
                  }`}
                />
              </Link>
            </div>

            {/* Dropdown */}
            <div
              className={`absolute left-1/2 top-full w-64 -translate-x-1/2 pt-3 transition-all duration-200 ${
                aboutOpen
                  ? "visible translate-y-0 opacity-100"
                  : "invisible -translate-y-2 opacity-0"
              }`}
            >
              <div className="overflow-hidden rounded-xl border border-gray-100 bg-white p-2 shadow-xl">

                {aboutLinks.map((link) => (
                  <NavLink
                    key={link.href}
                    to={link.href}
                    onClick={() => setAboutOpen(false)}
                    className={({ isActive }) =>
                      `block rounded-lg px-4 py-3 text-sm font-medium transition ${
                        isActive
                          ? "bg-blue-50 text-[#318EC9]"
                          : "text-gray-700 hover:bg-blue-50 hover:text-[#318EC9]"
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                ))}

              </div>
            </div>
          </div>

          {/* Navigation Before Our Impact */}
          {navLinksBeforeImpact.map((link) => (
            <NavLink
              key={link.href}
              to={link.href}
              className={({ isActive }) =>
                `relative py-2 text-sm font-medium transition-colors duration-200 ${
                  isActive
                    ? "text-[#318EC9]"
                    : "text-gray-700 hover:text-[#318EC9]"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {link.label}

                  <span
                    className={`absolute bottom-0 left-0 h-0.5 rounded-full bg-[#318EC9] transition-all duration-200 ${
                      isActive ? "w-full" : "w-0"
                    }`}
                  />
                </>
              )}
            </NavLink>
          ))}

          {/* Our Impact Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setImpactOpen(true)}
            onMouseLeave={() => setImpactOpen(false)}
          >
            <Link
              to="/impact"
              className={`relative flex items-center gap-1 py-2 text-sm font-medium transition-colors duration-200 ${
                isImpactActive
                  ? "text-[#318EC9]"
                  : "text-gray-700 hover:text-[#318EC9]"
              }`}
            >
              Our Impact

              <span
                className={`transition-transform duration-200 ${
                  impactOpen ? "rotate-180" : ""
                }`}
              >
                <FiChevronDown size={16} />
              </span>

              <span
                className={`absolute bottom-0 left-0 h-0.5 rounded-full bg-[#318EC9] transition-all duration-200 ${
                  isImpactActive ? "w-full" : "w-0"
                }`}
              />
            </Link>

            {/* Our Impact Dropdown Menu */}
            <div
              className={`absolute left-1/2 top-full w-64 -translate-x-1/2 pt-3 transition-all duration-200 ${
                impactOpen
                  ? "visible translate-y-0 opacity-100"
                  : "invisible -translate-y-2 opacity-0"
              }`}
            >
              <div className="overflow-hidden rounded-xl border border-gray-100 bg-white p-2 shadow-xl">
                {impactLinks.map((link) => (
                  <NavLink
                    key={link.href}
                    to={link.href}
                    onClick={() => setImpactOpen(false)}
                    className={({ isActive }) =>
                      `block rounded-lg px-4 py-3 text-sm font-medium transition ${
                        isActive
                          ? "bg-blue-50 text-[#318EC9]"
                          : "text-gray-700 hover:bg-blue-50 hover:text-[#318EC9]"
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                ))}
              </div>
            </div>
          </div>

          {/* Navigation After Our Impact */}
          {navLinksAfterImpact.map((link) => (
            <NavLink
              key={link.href}
              to={link.href}
              className={({ isActive }) =>
                `relative py-2 text-sm font-medium transition-colors duration-200 ${
                  isActive
                    ? "text-[#318EC9]"
                    : "text-gray-700 hover:text-[#318EC9]"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {link.label}

                  <span
                    className={`absolute bottom-0 left-0 h-0.5 rounded-full bg-[#318EC9] transition-all duration-200 ${
                      isActive ? "w-full" : "w-0"
                    }`}
                  />
                </>
              )}
            </NavLink>
          ))}

          {/* Primary CTA */}
          <Link
            to="/get-involved"
            className="rounded-lg bg-[#ED1C24] px-5 py-3 text-sm font-semibold text-white transition hover:bg-red-700"
          >
            Support a Mother and Child
          </Link>
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
            <span className="inline-flex h-6 w-6 items-center justify-center text-2xl leading-none">
              <FiX />
            </span>
          ) : (
            <span className="inline-flex h-6 w-6 items-center justify-center text-2xl leading-none">
              <FiMenu />
            </span>
          )}
        </button>
      </nav>

      

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="border-t border-gray-100 bg-white lg:hidden">
          <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6">

            <div className="flex flex-col gap-1">

              {/* Home */}
              <NavLink
                to="/"
                end
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `rounded-lg px-4 py-3 text-sm font-medium transition ${
                    isActive
                      ? "bg-blue-50 text-[#318EC9]"
                      : "text-gray-700 hover:bg-blue-50 hover:text-[#318EC9]"
                  }`
                }
              >
                Home
              </NavLink>

              {/* Mobile About */}
              <div>
                <button
                  type="button"
                  onClick={() => setAboutOpen(!aboutOpen)}
                  className={`flex w-full cursor-pointer items-center justify-between rounded-lg px-4 py-3 text-sm font-medium transition ${
                    isAboutActive
                      ? "bg-blue-50 text-[#318EC9]"
                      : "text-gray-700 hover:bg-blue-50 hover:text-[#318EC9]"
                  }`}
                >
                  <span>About Us</span>

                  <span
                    className={`inline-flex h-4 w-4 transition-transform ${
                      aboutOpen ? "rotate-180" : ""
                    }`}
                  >
                    <FiChevronDown />
                  </span>
                </button>

                {aboutOpen && (
                  <div className="ml-4 mt-1 border-l-2 border-blue-100 pl-3">

                    <Link
                      to="/about"
                      onClick={() => setIsOpen(false)}
                      className="block rounded-lg px-4 py-2.5 text-sm text-gray-600 hover:bg-blue-50 hover:text-[#318EC9]"
                    >
                      About Us
                    </Link>

                    {aboutLinks.map((link) => (
                      <NavLink
                        key={link.href}
                        to={link.href}
                        onClick={() => setIsOpen(false)}
                        className={({ isActive }) =>
                          `block rounded-lg px-4 py-2.5 text-sm transition ${
                            isActive
                              ? "bg-blue-50 font-medium text-[#318EC9]"
                              : "text-gray-600 hover:bg-blue-50 hover:text-[#318EC9]"
                          }`
                        }
                      >
                        {link.label}
                      </NavLink>
                    ))}

                  </div>
                )}
              </div>

              {/* Mobile Navigation Before Our Impact */}
              {navLinksBeforeImpact.map((link) => (
                <NavLink
                  key={link.href}
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `rounded-lg px-4 py-3 text-sm font-medium transition ${
                      isActive
                        ? "bg-blue-50 text-[#318EC9]"
                        : "text-gray-700 hover:bg-blue-50 hover:text-[#318EC9]"
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}

              {/* Mobile Our Impact Dropdown */}
              <div>
                <button
                  type="button"
                  onClick={() => setImpactOpen(!impactOpen)}
                  className={`flex w-full cursor-pointer items-center justify-between rounded-lg px-4 py-3 text-sm font-medium transition ${
                    isImpactActive
                      ? "bg-blue-50 text-[#318EC9]"
                      : "text-gray-700 hover:bg-blue-50 hover:text-[#318EC9]"
                  }`}
                >
                  <span>Our Impact</span>

                  <span
                    className={`inline-flex h-4 w-4 transition-transform ${
                      impactOpen ? "rotate-180" : ""
                    }`}
                  >
                    <FiChevronDown />
                  </span>
                </button>

                {impactOpen && (
                  <div className="ml-4 mt-1 border-l-2 border-blue-100 pl-3">
                    <Link
                      to="/impact"
                      onClick={() => setIsOpen(false)}
                      className="block rounded-lg px-4 py-2.5 text-sm font-medium text-gray-600 hover:bg-blue-50 hover:text-[#318EC9]"
                    >
                      Impact Overview
                    </Link>

                    {impactLinks.map((link) => (
                      <NavLink
                        key={link.href}
                        to={link.href}
                        onClick={() => setIsOpen(false)}
                        className={({ isActive }) =>
                          `block rounded-lg px-4 py-2.5 text-sm transition ${
                            isActive
                              ? "bg-blue-50 font-medium text-[#318EC9]"
                              : "text-gray-600 hover:bg-blue-50 hover:text-[#318EC9]"
                          }`
                        }
                      >
                        {link.label}
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>

              {/* Mobile Navigation After Our Impact */}
              {navLinksAfterImpact.map((link) => (
                <NavLink
                  key={link.href}
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `rounded-lg px-4 py-3 text-sm font-medium transition ${
                      isActive
                        ? "bg-blue-50 text-[#318EC9]"
                        : "text-gray-700 hover:bg-blue-50 hover:text-[#318EC9]"
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}

              {/* Mobile CTA */}
              <Link
                to="/get-involved"
                onClick={() => setIsOpen(false)}
                className="mt-2 rounded-lg bg-[#ED1C24] px-4 py-3 text-center text-sm font-semibold text-white transition hover:bg-red-700"
              >
                Support a Mother and Child
              </Link>

            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;