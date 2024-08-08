import HomeContainer from "./Helper/HomeContainer";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import { ArrowUpIcon } from "@heroicons/react/20/solid";
import HomeRecipeCard from "./Helper/HomeRecipeCard";
import { BananaPancakes } from "@/app/constants/home";

const ShareRecipes = () => {
  return (
    <HomeContainer className="flex flex-col items-center justify-center gap-10 lg:flex-row-reverse">
      <div className="w-[min(37.5rem,_100%)]">
        <h1 className="mb-3 text-pretty text-4xl font-bold">
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

  return (
    <article className="flex w-[min(32.5rem,_100%)] flex-col rounded-[2rem] border-2 border-border bg-[#e9e9e9] p-4 shadow-md sm:p-5">
      <div className="mx-1 mb-7 flex items-center justify-between">
        <ChevronLeftIcon className="size-6" />

        <h6 className="text-xl font-bold">Emily</h6>
      </div>

      <div className="mb-7 flex flex-col gap-3">
        <HomeMessage
          content={`Mom, can we try making this recipe?? It looks so delicious! And I promise I won't make a mess this time, pleeeaseeee?`}
          position="left"
        >
          <HomeRecipeCard
            recipe={BananaPancakes}
            small={true}
          />
        </HomeMessage>
      </div>

      <div className="flex items-center gap-2">
        <div className="w-full rounded-3xl bg-foreground px-3 py-2 shadow-sm">
          <p>That sounds like a great idea, sweetie!</p>
        </div>

        <div className="rounded-full bg-primary p-2 shadow-sm">
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
        className={`mt-1 inline-block whitespace-pre-line rounded-xl p-2 text-sm shadow ${
          position == "left" ? "bg-foreground" : "bg-primary-light"
        }`}
      >
        {content}
      </p>
    </div>
  );
};
