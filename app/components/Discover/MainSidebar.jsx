"use client";
import { useContext } from "react";
import Navbar from "../Navbar/Discover/Navbar";
import { SidebarStatus } from "../Navbar/Discover/SideBarProvider";
import { ArrowLeftIcon } from "@heroicons/react/20/solid";

const MainSidebar = () => {
  const [open, setOpen] = useContext(SidebarStatus);

  return (
    <aside
      className={`z-50 h-svh overflow-y-auto w-64 ease-out transition-all bg-foreground shadow-lg py-5 px-7 lg:sticky fixed lg:left-0 -left-64 ${
        open ? "!left-0" : "!-left-64"
      }`}
    >
      <div className="flex items-center justify-between mb-7">
        <h2 className="tracking-tight text-primary font-bold text-4xl">
          Yumy
        </h2>
        <button onClick={() => setOpen(false)} className="inline-block lg:hidden p-1 mt-1 rounded-full hover:bg-border transition-colors input-focus">
          <ArrowLeftIcon className="w-5" />
        </button>
      </div>
      <div className="flex flex-col gap-5">
        <Navbar />
      </div>
    </aside>
  );
};

export default MainSidebar;
