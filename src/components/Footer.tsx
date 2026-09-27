import thehasaLogo from "../assets/branding/thehasa-logo.png";
import matLabsLogo from "../assets/branding/mat-labs.png";
import { Link } from "react-router-dom";


const footerLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Our Model", href: "/model" },
  { label: "Join a Course", href: "/join-a-course" },
  { label: "Get Involved", href: "/get-involved" },
  { label: "Sources", href: "/sources" },
  { label: "Contact", href: "/contact" },
];

function Footer() {
  return (
    <footer className="bg-[#163B55] text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">

          {/* Organisation */}
          <div>
            {/* Clickable THEHASA Logo */}
            <a
              href="/"
              aria-label="THEHASA Foundation home"
              className="inline-flex items-center transition-opacity duration-200 hover:opacity-80"
            >
              <img
                src={thehasaLogo}
                alt="THEHASA Foundation"
                className="h-40 w-auto object-contain"
              />
            </a>

            <p className="mt-4 max-w-md text-sm leading-6 text-white/80">
              A women-led community-based organisation in Kyangwali Refugee
              Settlement, Uganda, where young mothers and young people learn a
              trade while their children are cared for and learn.
            </p>

            <div className="mt-5 space-y-1 text-sm text-white/80">
              <p>URSB Registration No. 80034058757595</p>
              <p>UVTAB Centre No. UVT692</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-widest text-white">
              Quick Links
            </h2>

            <nav className="mt-4 grid grid-cols-2 gap-x-6 gap-y-3">
              {footerLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  className="text-sm text-white/80 transition hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact / Safeguarding */}
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-widest text-white">
              Contact
            </h2>

            <div className="mt-4 space-y-2 text-sm leading-6 text-white/80">
              <p>Kyangwali Refugee Settlement, Uganda</p>
              <p>+256 770 952 512</p>
              <p>0393 103 992</p>
              <p>thehasafoundation@gmail.com</p>
            </div>

            <p className="mt-5 text-sm text-white/80">
              Safeguarding and whistleblowing:{" "}
              <span className="text-white/60">
                confidential contact to be confirmed
              </span>
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 border-t border-white/15 pt-6">
          <div className="flex flex-col items-center justify-center gap-2 text-center sm:flex-row sm:gap-3">

            <p className="text-sm text-white/60">
              © 2026 THEHASA Foundation. All rights reserved.
            </p>

            <span className="hidden text-white/30 sm:inline">
              |
            </span>

            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Powered by Mat Labs"
              className="inline-flex items-center gap-2 text-sm text-white/60 transition hover:text-white"
            >
              <span>Powered by</span>

              <img
                src={matLabsLogo}
                alt="Mat Labs"
                className="h-7 w-auto object-contain"
              />
            </a>

          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;