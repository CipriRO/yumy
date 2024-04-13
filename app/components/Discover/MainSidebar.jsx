"use client"
import { useContext } from "react";
import Navbar from "../Navbar/Discover/Navbar";
import { SidebarStatus } from "../Navbar/Discover/SideBarProvider";

const MainSidebar = () => {
  const [open, setOpen] = useContext(SidebarStatus);

  return (
    <aside className={`z-50 h-screen overflow-y-auto w-64 ease-out transition-all bg-foreground shadow-lg py-5 px-7 lg:sticky fixed lg:left-0 -left-64 ${open ? "!left-0" : "!-left-64"}`}>
      <div className="flex justify-between">
        <h2 className="tracking-tight text-primary font-bold text-4xl mb-7">Yumy</h2>
        <button className="lg:hidden" onClick={() => setOpen(false)}>close</button>
      </div>
      <div className="flex flex-col gap-5">
        <Navbar />
      </div>
    </aside>
  );
};

export default MainSidebar;
