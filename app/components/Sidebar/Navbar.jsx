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

const Navbar = ({setOpen}) => {
  const pathname = usePathname();

  return (
    <nav className="flex flex-col gap-4 text-copy-light">
      {links.map((link, idx) => (
        <Link
          onClick={() => setOpen(false)}
          href={link.path}
          key={idx}
          className={cn(
            `group flex items-center gap-2 rounded-full px-3 py-2 outline-none transition-all hover:bg-background hover:font-semibold hover:text-copy focus:bg-background focus:font-semibold focus-visible:text-copy`,
            {
              "bg-background font-semibold text-copy": pathname === link.path,
              "text-error hover:text-error focus-visible:text-error":
                link.name === "Sign out",
            },
          )}
        >
          <div
            className={cn(
              "w-6 transition-transform group-hover:scale-110 group-focus-visible:scale-110",
              {
                "scale-110": pathname === link.path,
              },
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
    path: "#",
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
