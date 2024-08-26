import { cn } from "@/app/lib/utils";
import Search from "../Discover/Search";
import AccountPill from "./AccountPill";

const Page = ({ search = true, className, ...props }) => {
  return (
    <main className="h-svh flex-1 overflow-y-auto px-4 pb-4 md:px-9 md:pb-9 [scrollbar-gutter:stable]">
      <div className="mx-auto max-w-[1200px]">
        {search && (
          <Search>
            <AccountPill />
          </Search>
        )}

        <div className={cn(className)} {...props} />
      </div>
    </main>
  );
};
export default Page;
