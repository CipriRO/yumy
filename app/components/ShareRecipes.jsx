import HomeContainer from "./HomeContainer";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import { ArrowUpIcon, ArrowUturnRightIcon } from "@heroicons/react/20/solid";
import { HomeRecipeCard } from "./Community";

const ShareRecipes = () => {
  return (
    <HomeContainer className="flex items-center gap-10">
      <div>
        <h2 className="mb-3 font-bold text-3xl">Share recipes with family</h2>

        <p className="text-text-700 w-[661px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed nemo,
          ipsam commodi corrupti modi quam quasi quo accusamus suscipit
          asperiores dolorem possimus autem dignissimos doloremque vitae, id
          voluptate eius quibusdam?
        </p>
        <p className="text-text-700 w-[661px]">
          Consequuntur dignissimos harum dolores aut praesentium quam impedit
          possimus hic at quisquam, corporis est aliquid nostrum perferendis
          aspernatur tempore saepe deserunt fugiat ipsa reiciendis placeat nam
          veritatis totam commodi. Similique.
        </p>
      </div>

      <div className="flex flex-col p-5 mx-auto bg-background-100 rounded-3xl w-full shadow-md">
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

        <div className="flex gap-2">
          <div className="px-3 py-2 bg-background-50 rounded-full w-full cursor-text shadow-sm">
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
    <div className={position == "left" ? "mr-14" : "ml-14"}>
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
