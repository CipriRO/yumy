"use client";
import Link from "next/link";

import { HomeIcon as HomeIconSolid } from "@heroicons/react/24/solid";
import { HomeIcon as HomeIconOutline } from "@heroicons/react/24/outline";

import { GlobeEuropeAfricaIcon as GlobeSolid } from "@heroicons/react/24/solid";
import { GlobeEuropeAfricaIcon as GlobeOutline } from "@heroicons/react/24/outline";

import { PaperAirplaneIcon as SendSolid } from "@heroicons/react/24/solid";
import { PaperAirplaneIcon as SendOutline } from "@heroicons/react/24/outline";

import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="flex flex-col gap-3 text-copy-light">
      {links.map((link, idx) => (
        <Link
          href={link.path}
          key={idx}
          className={`flex items-center gap-2 py-1 hover:font-semibold hover:text-copy transition-all ${
            pathname === link.path && "font-semibold text-copy"
          }`}
        >
          <div className="w-6">
            {pathname === link.path ? link.clickedIcon : link.defaultIcon}
          </div>
          {link.name}
        </Link>
      ))}
    </nav>
  );
};
export default Navbar;

const links = [
  {
    name: "Home",
    path: "/",
    defaultIcon: <HomeIconOutline />,
    clickedIcon: <HomeIconSolid />,
  },
  {
    name: "Discover",
    path: "/discover",
    defaultIcon: <GlobeOutline />,
    clickedIcon: <GlobeSolid />,
  },
  {
    name: "Messages",
    path: "/messages",
    defaultIcon: <SendOutline />,
    clickedIcon: <SendSolid />,
  },
  {
    name: "Something",
    path: "/something",
    defaultIcon: <MagnifyingGlassIcon />,
    clickedIcon: <HomeIconSolid />,
  },
];
