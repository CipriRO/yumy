import Link from "next/link";
import LoginBtn from "./LoginBtn";

const NavLinks = ({ pathname }) => {
  return (
    <nav className="hidden sm:flex items-center gap-8">
      {NavbarLinks.map((link, index) => (
        <Link
          href={link.href}
          role="button"
          key={index}
          className={`cursor-pointer hover:opacity-60 transition-opacity ${
            pathname === link.href ? "text-primary-dark font-bold" : undefined
          }`}
        >
          {link.name}
        </Link>
      ))}
      <LoginBtn pathname={pathname} className="-ml-2" />
    </nav>
  );
};

export default NavLinks;

export const NavbarLinks = [
  { name: "Privacy Policy", href: "#" },
  { name: "Terms and Conditions", href: "#" },
];
