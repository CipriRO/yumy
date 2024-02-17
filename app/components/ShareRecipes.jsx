import HomeContainer from "./HomeContainer";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import { ArrowUpIcon } from "@heroicons/react/20/solid"

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
          <Message
            content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur dolor, doloribus reiciendis pariatur quos ex ipsa provident magnam tenetur voluptas, quae similique illum beatae quam sit optio nam numquam mollitia!"
            position="left"
          />
          <Message
            content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur dolor, doloribus reiciendis pariatur quos ex ipsa provident magnam tenetur voluptas, quae similique illum beatae quam sit optio nam numquam mollitia!"
            position="right"
          />
        </div>

        <div className="flex gap-2">
          <div className="px-3 py-2 bg-background-50 rounded-full w-full">
            <p>Of course, Honey!</p>
          </div>

          <button className="bg-primary p-2 rounded-full"><ArrowUpIcon className="w-6" /></button>
        </div>
      </div>
    </HomeContainer>
  );
};

export default ShareRecipes;

const Message = ({ content, position }) => {
  return (
    <div
      className={`p-2 rounded-xl text-sm shadow ${
        position == "left" ? "bg-background-50 mr-14" : "bg-primary-300 ml-14"
      }`}
    >
      {content}
    </div>
  );
};
