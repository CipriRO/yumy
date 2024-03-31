import { RecipesList } from "@/app/constants/home";
import RecipeCard from "./RecipeCard";
import { ArrowRightIcon } from "@heroicons/react/20/solid";
import { Fragment } from "react";
import Link from "next/link";

const RecipesGrid = () => {
  return (
    <article className="">
      {categories.map((category, idx) => (
        <Fragment key={idx}>
          <div className="flex items-center mb-3">
            <h2 className="tracking-tight inline text-3xl font-bold mr-1">{category}</h2>
            <Link
              href={`/${category}`}
              className="inline-block p-1 mt-1 rounded-full hover:bg-border transition-colors"
            >
              <ArrowRightIcon className="w-5" />
            </Link>
          </div>
          <div className="grid grid-cols-3 gap-4 mb-7 justify-items-center">
            {RecipesList.map((recipe, idx) => (
              <RecipeCard
                name={recipe.name}
                autor={recipe.autor}
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
