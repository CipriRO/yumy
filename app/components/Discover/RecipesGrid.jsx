import RecipeCard from "./RecipeCard";
import { ArrowRightIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import { getRecipes } from "@/app/lib/getData";

const RecipesGrid = async () => {
  const recipes = await getRecipes();

  return (
    <article className="">
      <Link
        href="#"
        className="link-focus group mb-3 mt-1 flex w-fit items-center gap-1 p-1 !ring-0 transition-all"
      >
        <h2 className="mr-1 inline text-3xl font-bold">Popular Recipes</h2>
        <ArrowRightIcon className="mt-1 w-5 transition-transform ease-linear group-hover:translate-x-1 group-focus-visible:translate-x-1" />
      </Link>
      <div className="mb-7 grid grid-cols-[repeat(auto-fit,_minmax(260px,1fr))] justify-items-center gap-4">
        {recipes.map((recipe, idx) => (
          <RecipeCard recipe={recipe} key={idx} />
        ))}
      </div>
    </article>
  );
};
export default RecipesGrid;
