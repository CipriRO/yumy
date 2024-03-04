"use client";
import { Turn as Hamburger } from "hamburger-react";
import MobileNavLinks from "./MobileNavLinks";
import NavLinks from "./NavLinks";
import { useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { useClickAway } from "react-use";

const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const navbarRef = useRef(null);

  useClickAway(navbarRef, () => setIsOpen(false));
  return (
    <nav className="sticky top-0 z-50">
      <div className="flex justify-between items-center bg-background-50 border-b-2 border-b-background-100 py-4 px-4 lg:py-4 lg:px-6">
        <h2 className="text-primary lg:text-4xl text-3xl font-bold">Yumy</h2>
        <NavLinks pathname={pathname} />
        <div className="sm:hidden block">
          <Hamburger
            toggled={isOpen}
            toggle={setIsOpen}
            size={30}
            direction="right"
          />
        </div>
      </div>
      <MobileNavLinks pathname={pathname} ref={navbarRef} isOpen={isOpen} setIsOpen={setIsOpen} />
    </nav>
  );
};

export default Navbar;
