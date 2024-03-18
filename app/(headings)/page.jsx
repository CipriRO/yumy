import Hero from "../components/Home/Hero";
import Community from "../components/Home/Community";
import Stats from "../components/Home/Stats";
import AllIngredients from "../components/Home/AllIngredients";
import ShareRecipes from "../components/Home/ShareRecipes";

export default function Home() {
  return (
    <main className="overflow-hidden relative">
      <Hero />
      <Stats />
      <Community />
      <ShareRecipes />
      <AllIngredients />
    </main>
  );
}
