import { HomeComments, RecipesList } from "@/app/constants/home";
import HomeContainer from "./Helper/HomeContainer";
import HomeRecipeCard from "./Helper/HomeRecipeCard";
import HomeComment from "./Helper/HomeComment";

const Community = () => {
  return (
    <HomeContainer className="flex flex-col items-center justify-center gap-10 lg:flex-row">
      <div className="w-[min(37.5rem,_100%)]">
        <h1 className="mb-3 text-pretty text-4xl font-bold">
          Connect with a Global Community of Food Enthusiasts
        </h1>

        <p className="">
          Explore a world of flavors by connecting with passionate home cooks
          and chefs from all corners of the globe. Share recipes, exchange
          cooking tips, and make new friends who share your love for culinary
          adventures.
        </p>
      </div>

      <CommunityUI />
    </HomeContainer>
  );
};

export default Community;

const CommunityUI = () => {
  return (
    <article className="flex w-[min(32.5rem,_100%)] flex-col items-center justify-center rounded-[2rem] border-2 border-border bg-[#e9e9e9] p-4 shadow-md sm:p-5">
      <HomeRecipeCard
        name={RecipesList[0].name}
        autor={RecipesList[0].autor}
        image={RecipesList[0].image}
        likes={RecipesList[0].likes}
      />
      <span className="block h-3 w-full" />
      <HomeComment
        name={HomeComments[0].name}
        content={HomeComments[0].content}
        liked={HomeComments[0].liked}
        likes={HomeComments[0].likes}
        profile_picture={HomeComments[0].profile_picture}
        time={HomeComments[0].time}
      />
    </article>
  );
};
