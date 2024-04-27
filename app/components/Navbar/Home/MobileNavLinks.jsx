"use client";
import Link from "next/link";
import LoginBtn from "./LoginBtn"
import { NavbarLinks } from "./NavLinks";
import { AnimatePresence, motion } from "framer-motion";

const MobileNavLinks = ({ pathname, _ref, isOpen, setIsOpen }) => {
  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            ref={_ref}
            className="fixed sm:hidden left-0 right-0 flex flex-col gap-3 *:text-center py-5 px-8 border-b-2 border-border bg-background z-50"
          >
            {NavbarLinks.map((link, index) => (
              <motion.p
                whileHover={{ scale: 1.05 }}
                key={index}
                className={`border-2 border-border rounded-full ${
                  pathname === link.href && "text-primary-dark font-semibold"
                }`}
                onClick={() => setIsOpen(false)}
              >
                <Link
                  href={link.href}
                  role="button"
                  className="w-full inline-block py-2"
                >
                  {link.name}
                </Link>
              </motion.p>
            ))}
            <motion.p
              whileHover={{ scale: 1.05 }}
              onClick={() => setIsOpen(false)}
            >
              <LoginBtn pathname={pathname} className="w-full inline-block" />
            </motion.p>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
};

export default MobileNavLinks;
