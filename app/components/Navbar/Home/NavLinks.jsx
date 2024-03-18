"use client";
import Link from "next/link";

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

export const LoginBtn = ({ pathname, className }) => {
  return (
    <Link
      href="/login"
      role="button"
      className={`${className} rounded-full py-2 px-6 shadow-lg bg-primary text-slate-50 font-medium hover:bg-primary-dark transition-colors ${
        pathname === "/login" ? "!bg-primary-dark" : undefined
      }`}
    >
      Log In
    </Link>
  );
};

export const NavbarLinks = [
  { name: "Home", href: "/" },
  { name: "Discover", href: "/discover" },
];
