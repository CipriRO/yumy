"use client";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { Turn as Hamburger } from "hamburger-react";
import { useContext } from "react";
import { SidebarStatus } from "../Navbar/Discover/Providers";

const Search = ({ children }) => {
  const [open, setOpen] = useContext(SidebarStatus);

  return (
    <>
      <div
        onClick={() => setOpen(false)}
        className={`absolute z-40 inset-0 ease-out transition-all lg:pointer-events-none lg:backdrop-blur-0 ${
          !open ? "pointer-events-none" : "backdrop-blur-md"
        }`}
      />{" "}
      {/* blur wrapper on mobile */}
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
              className="px-3 rounded-e-full bg-slate-100 hover:bg-slate-200 input-focus transition-colors"
            >
              <MagnifyingGlassIcon className="w-6" />
            </button>
          </div>
        </div>
        {children}
      </div>
    </>
  );
};
export default Search;