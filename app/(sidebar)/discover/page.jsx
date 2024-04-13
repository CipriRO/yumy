import Search from "@/app/components/Discover/Search";
import RecipesGrid from "@/app/components/Discover/RecipesGrid";

export const metadata = {
  title: "Discover",
  description: "Discover new recipes!",
};

const page = () => {
  return (
    <main className="flex-1 md:p-9 p-4 md:pt-4 h-screen overflow-y-auto">
      <div className="max-w-[1200px] mx-auto">
        <Search />
        <h1 className="tracking-tight text-5xl font-black mb-6">Discover</h1>
        <RecipesGrid />
      </div>
    </main>
  );
};

export default page;
