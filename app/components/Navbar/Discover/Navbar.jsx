"use client";
import Link from "next/link";

import {
  UserCircleIcon as UserSolid,
  GlobeEuropeAfricaIcon as GlobeSolid,
  PaperAirplaneIcon as SendSolid,
  Cog8ToothIcon as SettingsSolid,
  ArrowLeftStartOnRectangleIcon as ArrowOutSolid,
} from "@heroicons/react/24/solid";
import {
  UserCircleIcon as UserOutline,
  GlobeEuropeAfricaIcon as GlobeOutline,
  PaperAirplaneIcon as SendOutline,
  Cog8ToothIcon as SettingsOutline,
  ArrowLeftStartOnRectangleIcon as ArrowOutOutline,
} from "@heroicons/react/24/outline";

import { usePathname } from "next/navigation";
import { cn } from "@/app/lib/utils";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="flex flex-col gap-4 text-copy-light">
      {links.map((link, idx) => (
        <Link
          href={link.path}
          key={idx}
          className={cn(
            `flex items-center gap-3 py-2 px-3 rounded-full hover:bg-background outline-none focus:bg-background hover:font-semibold hover:text-copy focus-visible:text-copy focus:font-semibold group transition-all`,
            {
              "font-semibold text-copy bg-background": pathname === link.path,
              "text-error hover:text-error focus-visible:text-error": link.name === "Sign out"
             }
          )}
        >
          <div
            className={cn(
              "w-6 group-hover:scale-110 group-focus-visible:scale-110 transition-transform",
              {
                "scale-110": pathname === link.path,
              }
            )}
          >
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
    name: "Profile",
    path: "/profile",
    defaultIcon: <UserOutline />,
    clickedIcon: <UserSolid />,
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
  {
    name: "Sign out",
    path: "/auth/signout",
    defaultIcon: <ArrowOutOutline />,
    clickedIcon: <ArrowOutSolid />,
  },
];
