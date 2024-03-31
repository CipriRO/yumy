import { HomeComments, RecipesList } from "@/app/constants/home";
import HomeContainer from "./Helper/HomeContainer";
import HomeRecipeCard from "./Helper/HomeRecipeCard";
import HomeComment from "./Helper/HomeComment";

const Community = () => {
  return (
    <HomeContainer className="flex flex-col justify-center lg:flex-row items-center gap-10">
      <div className="w-[min(37.5rem,_100%)]">
        <h1 className="tracking-tight mb-3 font-bold text-4xl text-pretty">
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
    <article className="flex flex-col items-center justify-center p-4 sm:p-5 bg-[#e9e9e9] border-2 border-border rounded-[2rem] w-[min(32.5rem,_100%)] shadow-md">
      <HomeRecipeCard
        name={RecipesList[0].name}
        autor={RecipesList[0].autor}
        image={RecipesList[0].image}
        likes={RecipesList[0].likes}
      />
      <span className="block w-full h-3" />
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
