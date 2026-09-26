import logo from "../assets/branding/thehasa-logo.png";

interface LogoProps {
  className?: string;
}

function Logo({ className = "h-36 w-auto" }: LogoProps) {
  return (
    <img
      src={logo}
      alt="THEHASA Foundation"
      className={`object-contain ${className}`}
    />
  );
}

export default Logo;