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
    <>
      <header className="sticky top-0 flex justify-between items-center bg-background border-b-2 border-b-border py-4 px-4 lg:py-4 lg:px-6 z-50">
        <h2 className="tracking-tight text-primary lg:text-4xl text-3xl font-bold">Yumy</h2>
        <NavLinks pathname={pathname} />
        <div className="sm:hidden block">
          <Hamburger
            toggled={isOpen}
            toggle={setIsOpen}
            size={30}
            direction="right"
          />
        </div>
      </header>
      <MobileNavLinks
        pathname={pathname}
        _ref={navbarRef}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
    </>
  );
};

export default Navbar;
