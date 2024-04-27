"use client";
import Image from "next/image";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { Turn as Hamburger } from "hamburger-react";
import { useContext } from "react";
import { SidebarStatus } from "../Navbar/Discover/SideBarProvider";

const Search = () => {
  const [open, setOpen] = useContext(SidebarStatus);

  return (
    <>
      <div
        onClick={() => setOpen(false)}
        className={`absolute z-40 inset-0 ease-out transition-all lg:pointer-events-none lg:backdrop-blur-0 ${
          !open ? "pointer-events-none" : "backdrop-blur-md"
        }`}
      /> { /* blur wrapper on mobile */}

      <div className="flex justify-around gap-5 h-[4.7rem] mb-4 py-4 px-4 md:px-9 -mx-4 md:-mx-9 sticky bg-background top-0 z-30">
        <button className="lg:hidden text-copy-light">
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
              className="z-[1] rounded-s-full px-5 w-full bg-foreground input-focus"
              type="text"
              placeholder="Search.."
            />
            <button
              role="button"
              className="px-3 rounded-e-full bg-gray-100 hover:bg-border input-focus transition-colors"
            >
              <MagnifyingGlassIcon className="w-6" />
            </button>
          </div>
        </div>
        <AccountSettings />
      </div>
    </>
  );
};
export default Search;

const AccountSettings = () => {
  return (
    <div className="flex md:bg-foreground rounded-full md:shadow-sm active:scale-95 ease-linear transition-transform">
      {/* <button className="bg-foreground px-3 rounded-s-full hover:bg-border transition-colors">
        <Cog8ToothIcon className="w-6 text-copy-light" />
      </button>

      <span className="h-5 w-[0.2rem] rounded-full bg-copy-lighter my-auto" /> */}

      <button className="flex justify-center w-full items-center gap-2 py-1 px-1 md:px-4 md:bg-foreground rounded-full hover:bg-gray-100 transition-colors input-focus">
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
