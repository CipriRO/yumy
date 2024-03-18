import HomeContainer from "./Helper/HomeContainer";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import { ArrowUpIcon } from "@heroicons/react/20/solid";
import HomeRecipeCard from "./Helper/HomeRecipeCard";
import { RecipesList } from "@/app/constants/home";

const ShareRecipes = () => {
  return (
    <HomeContainer className="flex flex-col lg:flex-row-reverse items-center gap-10">
      <div className="flex-1">
        <h1 className="mb-3 font-bold text-4xl text-pretty">
          Share Recipes Seamlessly with Your Loved Ones
        </h1>

        <p className="">
          With Yumy, sharing your favorite recipes with friends and family has
          never been easier. Simply click a button to share your culinary
          creations directly on our platform. Strengthen bonds over shared meals
          and create unforgettable dining experiences together.
        </p>
      </div>

      <ShareUI />
    </HomeContainer>
  );
};

export default ShareRecipes;

const ShareUI = () => {
  const recipe = RecipesList[2];

  return (
    <article className="flex flex-col p-4 sm:p-5 mx-auto bg-[#e9e9e9] border-2 border-border rounded-[2rem] flex-1 max-w-[32.5rem] shadow-md">
      <div className="flex items-center justify-between mx-1 mb-7">
        <ChevronLeftIcon className="size-6" />

        <h6 className="font-bold text-xl">Emily</h6>
      </div>

      <div className="flex flex-col gap-3 mb-7">
        <HomeMessage
          content={`Mom, can we try making this recipe?? It looks so delicious! And I promise I won't make a mess this time, pleeeaseeee?`}
          position="left"
        >
          <HomeRecipeCard
            name={recipe.name}
            autor={recipe.autor}
            image={recipe.image}
            small={true}
          />
        </HomeMessage>
      </div>

      <div className="flex items-center gap-2">
        <div className="px-3 py-2 bg-foreground rounded-3xl w-full shadow-sm">
          <p>That sounds like a great idea, sweetie!</p>
        </div>

        <div className="bg-primary p-2 rounded-full shadow-sm">
          <ArrowUpIcon className="w-6" />
        </div>
      </div>
    </article>
  );
};

const HomeMessage = ({ content, position, children }) => {
  return (
    <div className={position == "left" ? "mr-7 sm:mr-14" : "ml-7 sm:ml-14"}>
      {children}
      <p
        className={`p-2 mt-1 rounded-xl text-sm shadow whitespace-pre-line inline-block ${
          position == "left" ? "bg-foreground" : "bg-primary-light"
        }`}
      >
        {content}
      </p>
    </div>
  );
};
