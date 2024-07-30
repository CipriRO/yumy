import Search from "@/app/components/Discover/Search";
import RecipesGrid from "@/app/components/Discover/RecipesGrid";
import { Suspense } from "react";
import AccountPill from "@/app/components/Discover/AccountPill";

export const metadata = {
  title: "Discover",
  description: "Discover new recipes!",
};

const page = async () => {
  return (
    <main className="h-svh flex-1 overflow-y-auto px-4 pb-4 md:px-9 md:pb-9">
      <div className="mx-auto max-w-[1200px]">
        <Search>
          <AccountPill />
        </Search>
        <h1 className="mb-6 text-5xl font-black">Discover</h1>
        <Suspense
          fallback={
            <p className="w-full text-center text-lg font-medium">Loading...</p>
          }
        >
          <RecipesGrid />
        </Suspense>
      </div>
    </main>
  );
};

export default page;
