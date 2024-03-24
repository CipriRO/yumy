"use client";
import Link from "next/link";

import {
  HomeIcon as HomeIconSolid,
  GlobeEuropeAfricaIcon as GlobeSolid,
  PaperAirplaneIcon as SendSolid,
  Cog8ToothIcon as SettingsSolid
} from "@heroicons/react/24/solid";
import {
  HomeIcon as HomeIconOutline,
  GlobeEuropeAfricaIcon as GlobeOutline,
  PaperAirplaneIcon as SendOutline,
  Cog8ToothIcon as SettingsOutline
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
          className={`flex items-center gap-3 py-2 px-3 rounded-full hover:bg-background hover:font-semibold hover:text-copy transition-all ${
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
