"use client";
import { useContext } from "react";
import Navbar from "../Sidebar/Navbar";
import { SidebarStatus } from "../Sidebar/Providers";
import { ArrowLeftIcon } from "@heroicons/react/20/solid";
import { cn } from "@/app/lib/utils";

const Sidebar = () => {
  const [open, setOpen] = useContext(SidebarStatus);

  return (
    <aside
      className={cn(
        `fixed -left-64 z-50 h-svh w-64 space-y-10 overflow-y-auto bg-foreground px-7 py-5 shadow-lg transition-all ease-out lg:sticky lg:left-0`,
        {
          "left-0": open,
          "-left-64": !open,
        },
      )}
    >
      <div className="flex items-center justify-between">
        <h2 className="ml-6 text-4xl font-bold text-primary">Yumy</h2>
        <button
          onClick={() => setOpen(false)}
          className="input-focus mt-1 inline-block rounded-full p-1 transition-colors hover:bg-border lg:hidden"
        >
          <ArrowLeftIcon className="w-5" />
        </button>
      </div>
      <Navbar />
    </aside>
  );
};

export default Sidebar;
