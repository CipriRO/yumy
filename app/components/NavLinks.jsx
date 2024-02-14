"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLinks = () => {
  const pathname = usePathname();

  return (
    <ul className="flex gap-8">
      <li className={pathname === "/" ? "text-primary-500 font-semibold" : undefined}>
        <Link href="/" role="button">
          Home
        </Link>
      </li>
      <li className={pathname === "/discover" ? "text-primary font-semibold" : undefined}>
        <Link href="/discover" role="button">
          Discover
        </Link>
      </li>
      <li>
        <Link
          href="/login"
          role="button"
          className={`rounded-full py-2 px-6 shadow-lg bg-primary-300/50 border-2 -ml-2 border-primary-300 text-primary-600 font-medium hover:bg-primary-500/80 hover:border-primary-500/80 hover:text-slate-50 transition-colors ${pathname === "/login" ? "!bg-primary-500/80 !border-primary-500/80 !text-slate-50" : undefined}`}
        >
          Log In
        </Link>
      </li>
    </ul>
  );
};

export default NavLinks;
