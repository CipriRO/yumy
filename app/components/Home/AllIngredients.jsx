import Image from "next/image";
import HomeContainer from "./Helper/HomeContainer";
import { RecipesList } from "@/app/constants/home";

const AllIngredients = () => {
  return (
    <HomeContainer className="flex flex-col justify-center lg:flex-row items-center gap-10">
      <div className="w-[min(37.5rem,_100%)]">
        <h1 className="tracking-tight mb-3 font-bold text-4xl text-pretty">
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
    <article className="flex flex-col p-4 sm:p-5 bg-[#e9e9e9] border-2 border-border rounded-[2rem] w-[min(32.5rem,_100%)] shadow-md">
      <div className="flex justify-between items-center mb-5">
        <Image
          src={`/recipe-images/${recipe.image}`}
          alt="Image of food"
          width={80}
          height={25}
          className="rounded-xl"
        />

        <h6 className="font-bold text-xl">{recipe.name}</h6>
      </div>

      <div className="bg-foreground shadow-sm p-3 rounded-2xl grid grid-cols-3 gap-x-2 gap-y-4 mb-5">
        {recipe.recipe.info.map((info, idx) => (
          <div
            key={idx}
            className="flex flex-col justify-center items-center text-center"
          >
            <h6 className="text-lg font-semibold">{info[0]}</h6>
            <p>{info[1]}</p>
          </div>
        ))}
      </div>

      <div>
        <h5 className="mb-2 text-xl font-semibold">Ingredients</h5>
        <ul className="*:mb-1 list-disc list-inside ml-3 hyphens-auto">
          {recipe.recipe.ingredients.map((ingredient, idx) => (
            <li key={idx}>{ingredient}</li>
          ))}
        </ul>
      </div>
    </article>
  );
};
