"use client";
import Image from "next/image";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { Turn as Hamburger } from "hamburger-react";
import { useContext } from "react";
import { SidebarStatus } from "../Navbar/Discover/SideBarProvider";

const Search = () => {
  const [open, setOpen] = useContext(SidebarStatus);

  return (
    <div className="flex justify-around gap-5 mb-7 h-11">
      <div onClick={() => setOpen(false)} className={`absolute z-40 inset-0 ease-out transition-all lg:pointer-events-none ${!open ? "pointer-events-none" : "backdrop-blur-md"}`} />
      <button className="lg:hidden">
        <Hamburger
          toggled={open}
          toggle={setOpen}
          size={30}
          direction="right"
        />
      </button>
      <div className="flex justify-center flex-1">
        <div className="flex shadow flex-1 max-w-80 rounded-full">
          <input
            className="rounded-s-full px-5 w-full bg-foreground input-focus"
            type="text"
            placeholder="Search.."
          />
          <button
            role="button"
            className="px-3 rounded-e-full hover:bg-border input-focus transition-colors"
          >
            <MagnifyingGlassIcon className="w-6" />
          </button>
        </div>
      </div>
      <AccountSettings />
    </div>
  );
};
export default Search;

const AccountSettings = () => {
  return (
    <div className="flex bg-foreground rounded-full shadow-sm active:scale-95 ease-linear transition-transform">
      {/* <button className="bg-foreground px-3 rounded-s-full hover:bg-border transition-colors">
        <Cog8ToothIcon className="w-6 text-copy-light" />
      </button>

      <span className="h-5 w-[0.2rem] rounded-full bg-copy-lighter my-auto" /> */}

      <button className="flex justify-center w-full items-center gap-2 py-1 px-3 md:px-4 bg-foreground rounded-full hover:bg-gray-100 transition-colors input-focus">
        <p className="hidden md:block font-medium">David Deli</p>
        <Image
          src="/profile-pictures/david-deli.jpg"
          alt="Profile picture of David Deli"
          width={30}
          height={30}
          className="rounded-full"
        />
      </button>
    </div>
  );
};
