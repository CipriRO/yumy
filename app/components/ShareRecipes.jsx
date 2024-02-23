import HomeContainer from "./HomeContainer";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import { ArrowUpIcon } from "@heroicons/react/20/solid";
import { HomeRecipeCard } from "./Community";

const ShareRecipes = () => {
  return (
    <HomeContainer className="flex flex-col lg:flex-row items-center gap-10">
      <div className="flex-1 max-w-[41.3125rem]">
        <h2 className="mb-3 font-bold text-3xl">Share recipes with family</h2>

        <p className="text-text-700">
          Join the flavor fiesta at Yumy, where we&apos;re all about bringing
          people together over fantastic food! With a click, you can dish out
          your best recipes to your fam, turning every mealtime into a
          flavor-packed adventure. At Yumy, we&apos;re firm believers that food
          isn&apos;t just about eating - it&apos;s about connecting hearts,
          sparking laughter, and creating memories that stick like spaghetti on
          a wall. So, let&apos;s stir up some magic in the kitchen and make
          every meal a delicious celebration of togetherness!
        </p>
      </div>

      <div className="flex flex-col p-4 sm:p-5 mx-auto bg-background-100 rounded-3xl flex-1 max-w-[32.5rem] shadow-md">
        <div className="flex justify-between mx-1 mb-7">
          <button>
            <ChevronLeftIcon className="size-6" />
          </button>

          <h4 className="font-bold text-xl">Emily</h4>
        </div>

        <div className="flex flex-col gap-3 mb-7">
          <HomeMessage
            content={`Mom, can we try making this recipe?? It looks so delicious!\n And I promise I won't make a mess this time, pleeeaseeee?`}
            position="left"
          >
            <HomeRecipeCard
              name="Ziti-Style Spagetti Squash"
              autor="Sophia Nguyen"
              image="recipe-of-the-year.jpg"
              small={true}
            />
          </HomeMessage>
        </div>

        <div className="flex items-center gap-2">
          <div className="px-3 py-2 bg-background-50 rounded-3xl w-full cursor-text shadow-sm">
            <p>That sounds like a great idea, sweetie!</p>
          </div>

          <button className="bg-primary-300 p-2 rounded-full shadow-sm">
            <ArrowUpIcon className="w-6" />
          </button>
        </div>
      </div>
    </HomeContainer>
  );
};

export default ShareRecipes;

const HomeMessage = ({ content, position, children }) => {
  return (
    <div className={position == "left" ? "mr-7 sm:mr-14" : "ml-7 sm:ml-14"}>
      {children}
      <p
        className={`p-2 mt-1 rounded-xl text-sm shadow whitespace-pre-line inline-block ${
          position == "left" ? "bg-background-50" : "bg-primary-300"
        }`}
      >
        {content}
      </p>
    </div>
  );
};
