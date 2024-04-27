"use client";
import Link from "next/link";

import {
  GlobeEuropeAfricaIcon as GlobeSolid,
  PaperAirplaneIcon as SendSolid,
  Cog8ToothIcon as SettingsSolid,
} from "@heroicons/react/24/solid";
import {
  GlobeEuropeAfricaIcon as GlobeOutline,
  PaperAirplaneIcon as SendOutline,
  Cog8ToothIcon as SettingsOutline,
} from "@heroicons/react/24/outline";

import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="flex flex-col gap-4 text-copy-light">
      {links.map((link, idx) => (
        <Link
          href={link.path}
          key={idx}
          className={`flex items-center gap-3 py-2 px-3 rounded-full hover:bg-background outline-none focus:bg-background hover:font-semibold hover:text-copy focus:text-copy focus:font-semibold group transition-all ${
            pathname === link.path && "font-semibold text-copy"
          }`}
        >
          <div className="w-6 group-hover:scale-110 group-focus:scale-110 transition-transform">
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
    name: "Discover",
    path: "/discover",
    defaultIcon: <GlobeOutline />,
    clickedIcon: <GlobeSolid />,
  },
  {
    name: "Messages",
    path: "#",
    defaultIcon: <SendOutline />,
    clickedIcon: <SendSolid />,
  },
  {
    name: "Settings",
    path: "#",
    defaultIcon: <SettingsOutline />,
    clickedIcon: <SettingsSolid />,
  },
];
