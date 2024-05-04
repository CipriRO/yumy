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
        <Dropdown>{children}</Dropdown>
      </div>
    </>
  );
};
export default Search;

import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import SignOut from "@/auth/SignOut";
import Link from "next/link";

function Dropdown({ children }) {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <Menu.Button
        type="submit"
        className="h-full flex justify-center items-center gap-2 py-1 px-1 md:px-4 md:bg-foreground rounded-full hover:bg-gray-100 active:scale-95 ease-linear transition-all input-focus md:shadow-sm max-w-56"
      >
        {children}
      </Menu.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 mt-2 w-36 origin-top divide-y divide-gray-100 rounded-2xl bg-foreground shadow-md focus:outline-none">
          <div className="px-1 py-1">
            <Menu.Item>
              {({ active }) => (
                <form action={async () => await SignOut()}>
                  <button
                    type="submit"
                    className={`${
                      active && "bg-background"
                    } group flex w-full items-center rounded-[calc(0.75rem-1px)] px-2 py-2 text-sm`}
                  >
                    Profile
                  </button>
                </form>
              )}
            </Menu.Item>
          </div>
          <div className="px-1 py-1">
            <Menu.Item>
              {({ active }) => (
                <Link
                  href="/auth/signout"
                  className={`${
                    active && "bg-background"
                  } group flex w-full items-center rounded-[calc(0.75rem-1px)] px-2 py-2 text-error text-sm font-medium`}
                >
                  Log out
                </Link>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
