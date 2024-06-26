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
    <main className="flex-1 pb-4 px-4 md:pb-9 md:px-9 h-svh overflow-y-auto">
      <div className="max-w-[1200px] mx-auto">
        <Search>
          <AccountPill />
        </Search>
        <h1 className="tracking-tight text-5xl font-black mb-6">Discover</h1>
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
