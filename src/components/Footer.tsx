const footerLinks = [
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
            <h2 className="text-xl font-bold">THEHASA Foundation</h2>

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
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm text-white/80 transition hover:text-white"
                >
                  {link.label}
                </a>
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
          <p className="text-center text-sm text-white/60">
            © 2026 THEHASA Foundation. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;