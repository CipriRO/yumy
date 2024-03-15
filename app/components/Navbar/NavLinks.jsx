"use client"
import { motion } from "framer-motion";
import Link from "next/link";

const NavLinks = ({ pathname }) => {
  return (
    <ul className="hidden sm:flex gap-8">
      {NavbarLinks.map((link, index) => (
        <motion.li
          whileHover={{fontWeight: 800}}
          key={index}
          className={`cursor-pointer ${
            pathname === link.href
              ? "text-primary-dark"
              : undefined
          }`}
        >
          <Link href={link.href} role="button" className="w-full">
            {link.name}
          </Link>
        </motion.li>
      ))}
      <li>
        <LoginBtn pathname={pathname} className="-ml-2" />
      </li>
    </ul>
  );
};

export default NavLinks;

export const LoginBtn = ({ pathname, className }) => {
  return (
    <Link
      href="/login"
      role="button"
      className={`${className} rounded-full py-2 px-6 shadow-lg bg-primary text-slate-50 font-medium hover:bg-primary-dark transition-colors ${
        pathname === "/login"
          ? "!bg-primary-dark"
          : undefined
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
