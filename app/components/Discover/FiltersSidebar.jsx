import Image from "next/image";
import Navbar from "../Navbar/Discover/Navbar";
import { Cog8ToothIcon } from "@heroicons/react/24/outline";

const FiltersSidebar = () => {
  return (
    <aside className="min-h-screen w-64 bg-foreground shadow-lg py-5 px-7 rounded-br-2xl">
      <h2 className="text-primary font-bold text-4xl mb-7">Yumy</h2>
      <div className="flex flex-col items-start gap-5">
        <Navbar />
        <AccountSettings />
      </div>
    </aside>
  );
};

const AccountSettings = () => {
  return (
    <div className="flex bg-background mx-auto rounded-full shadow">
      <button className="bg-background px-3 rounded-s-full hover:bg-border transition-colors">
        <Cog8ToothIcon className="w-6 text-copy-light" />
      </button>

      <span className="h-5 w-[0.1rem] rounded-full bg-copy-lighter my-auto" />

      <button className="flex items-center gap-2 py-1 bg-background px-3 rounded-e-full hover:bg-border transition-colors">
        <p className="font-medium">David Deli</p>
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

export default FiltersSidebar;
