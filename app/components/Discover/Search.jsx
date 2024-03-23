import Image from "next/image";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const Search = () => {
  return (
    <div className="flex justify-around gap-2 mb-4 h-11">
      <div className="flex justify-center flex-1">
        <div className="flex shadow rounded-full">
          <input
            className="rounded-s-full px-5 w-80 bg-foreground"
            type="text"
            placeholder="Search.."
          />
          <button role="button" className="px-3 rounded-e-full hover:bg-border transition-colors">
            <MagnifyingGlassIcon className="w-6" />
          </button>
        </div>
      </div>
      <AccountSettings />
    </div>
  );
};
export default Search;

const AccountSettings = () => {
  return (
    <div className="flex bg-foreground rounded-full shadow-sm">
      {/* <button className="bg-foreground px-3 rounded-s-full hover:bg-border transition-colors">
        <Cog8ToothIcon className="w-6 text-copy-light" />
      </button>

      <span className="h-5 w-[0.2rem] rounded-full bg-copy-lighter my-auto" /> */}

      <button className="flex justify-center w-full items-center gap-2 py-1 px-4 bg-foreground rounded-full hover:bg-border transition-colors">
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
