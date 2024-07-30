import RecipeCard from "./RecipeCard";
import { ArrowRightIcon } from "@heroicons/react/20/solid";
import { Fragment } from "react";
import Link from "next/link";

const RecipesGrid = async () => {
  const res = await fetch(`${process.env.URL}/api/feed`, {
    headers: {
      method: "GET",
      "Content-Type": "application/json",
    },
  });
  const feed = await res.json();

  return (
    <article className="">
      {categories.map((category, idx) => (
        <Fragment key={idx}>
          <Link
            hre
            classNa
            className="link-focus group mb-3 mt-1 flex w-fit items-center gap-1 p-1 !ring-0 transition-all"
          >
            <h2 className="inline mr-1 text-3xl font-bold">
              {category}
            </h2>
            <ArrowRightIcon className="mt-1 w-5 transition-transform ease-linear group-hover:translate-x-1 group-focus-visible:translate-x-1" />
          </Link>
          <div className="mb-7 grid grid-cols-[repeat(auto-fit,_minmax(260px,1fr))] justify-items-center gap-4">
            {feed.map((recipe, idx) => (
              <RecipeCard
                name={recipe.name}
                author={recipe.author}
                image={recipe.image}
                likes={recipe.likes}
                key={idx}
              />
            ))}
          </div>
        </Fragment>
      ))}
    </article>
  );
};
export default RecipesGrid;

const categories = ["Vegetarian", "Gluten-Free", "High-Protein", "Low-Carb"];
