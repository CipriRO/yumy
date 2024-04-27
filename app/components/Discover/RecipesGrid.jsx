import RecipeCard from "./RecipeCard";
import { ArrowRightIcon } from "@heroicons/react/20/solid";
import { Fragment } from "react";
import Link from "next/link";

const RecipesGrid = async () => {
  const res = await fetch(`${process.env.URL}/api/feed`, {
    headers: {
      method: "GET",
      "Content-Type": "application/json"
    },
  })
  const feed = await res.json();

  return (
    <article className="">
      {categories.map((category, idx) => (
        <Fragment key={idx}>
          <div className="flex items-center mb-3">
            <h2 className="tracking-tight inline text-3xl font-bold mr-1">
              {category}
            </h2>
            <Link
              href={`/${category}`}
              className="inline-block p-1 mt-1 rounded-full hover:bg-border transition-colors input-focus"
            >
              <ArrowRightIcon className="w-5" />
            </Link>
          </div>
            <div className="grid grid-cols-[repeat(auto-fit,_minmax(260px,1fr))] justify-items-center gap-4 mb-7">
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
