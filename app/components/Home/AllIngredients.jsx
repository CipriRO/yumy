import Image from "next/image";
import HomeContainer from "./Helper/HomeContainer";
import { RecipesList } from "@/app/constants/home";

const AllIngredients = () => {
  return (
    <HomeContainer className="flex flex-col items-center justify-center gap-10 lg:flex-row">
      <div className="w-[min(37.5rem,_100%)]">
        <h1 className="mb-3 text-pretty text-4xl font-bold">
          Cooking made easy.
        </h1>

        <p className="">
          Get ready to cook up a storm right away with Yumy&apos;s comprehensive
          recipe listings. From detailed ingredient lists and quantities to
          preparation times and step-by-step instructions, we provide all the
          information you need to whip up delicious meals in no time.
        </p>
      </div>

      <RecipeDetailsUI />
    </HomeContainer>
  );
};

export default AllIngredients;

const RecipeDetailsUI = () => {
  const recipe = RecipesList[0];

  return (
    <article className="flex w-[min(32.5rem,_100%)] flex-col rounded-[2rem] border-2 border-border bg-[#e9e9e9] p-4 shadow-md sm:p-5">
      <div className="mb-5 flex items-center justify-between">
        <Image
          src={`/recipe-images/${recipe.image}`}
          alt="Image of food"
          width={80}
          height={25}
          className="rounded-xl"
        />

        <h6 className="text-xl font-bold">{recipe.name}</h6>
      </div>

      {/* <div className="bg-foreground shadow-sm p-3 rounded-2xl grid grid-cols-3 gap-x-2 gap-y-4 mb-5">
        {recipe.recipe.info.map((info, idx) => (
          <div
            key={idx}
            className="flex flex-col justify-center items-center text-center"
          >
            <h6 className="text-lg font-semibold">{info[0]}</h6>
            <p>{info[1]}</p>
          </div>
        ))}
      </div> */}

      <div>
        <h5 className="mb-2 text-xl font-semibold">Ingredients</h5>
        <ul className="ml-3 list-inside list-disc hyphens-auto *:mb-1">
          {recipe.recipe.ingredients.map((ingredient, idx) => (
            <li key={idx}>{ingredient}</li>
          ))}
        </ul>
      </div>
    </article>
  );
};
