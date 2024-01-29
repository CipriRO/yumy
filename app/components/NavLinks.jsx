"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLinks = () => {
  const pathname = usePathname();

  return (
    <ul className="flex gap-6">
      <li className={pathname === "/" && "text-primary font-semibold"}>
        <Link href="/">Home</Link>
      </li>
      <li className={pathname === "/discover" && "text-primary font-semibold"}>
        <Link href="/discover">Discover</Link>
      </li>
      <li className={pathname === "/login" && "text-primary font-semibold"}>
        <Link href="/login">Log In</Link>
      </li>
    </ul>
  );
};

export default NavLinks;
