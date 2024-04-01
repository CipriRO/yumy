import RecipesGrid from "./RecipesGrid";
import Search from "./Search";

const Main = () => {
  return (
    <section className="flex-1 p-9 pt-3 h-screen overflow-y-auto">
      <div className="max-w-[1200px] mx-auto">
        <Search />
        <h1 className="tracking-tight text-5xl font-black mb-6">Discover</h1>
        <RecipesGrid />
      </div>
    </section>
  );
};
export default Main;
