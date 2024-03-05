import Hero from "./components/Home/Hero";
import Community from "./components/Home/Community";
import Stats from "./components/Home/Stats";
import YourRecipes from "./components/Home/YourRecipes";
import ShareRecipes from "./components/Home/ShareRecipes";

export default function Home() {
  return (
    <main className="overflow-hidden relative">
      <Hero />
      <Stats />
      <Community />
      <ShareRecipes />
      <YourRecipes />
    </main>
  );
}
