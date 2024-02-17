import Hero from "./components/Hero";
import Community from "./components/Community";
import Stats from "./components/Stats";
import YourRecipes from "./components/YourRecipes";
import ShareRecipes from "./components/ShareRecipes";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <Stats />
      <Community />
      <ShareRecipes />
      <YourRecipes />
    </main>
  );
}
