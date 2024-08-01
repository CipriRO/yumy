import InfoBox from "@/app/components/ui/InfoBox";
import LikeAndSend from "@/app/components/ui/LikeAndSend";
import Page from "@/app/components/ui/Page";
import Pill from "@/app/components/ui/Pill";
import { RecipesList } from "@/app/constants/home";
import { cn } from "@/app/lib/utils";

export async function generateMetadata({ params }) {
  return { title: RecipesList[params.id].name };
}

const page = ({ params }) => {
  const recipe = RecipesList[params.id];
  return (
    <Page className="space-y-11">
      <article className="mt-3 flex flex-col-reverse justify-center gap-x-5 gap-y-10 xl:flex-row">
        <div
          style={{ backgroundImage: `url(/recipe-images/${recipe.image})` }}
          className={`h-[20rem] max-w-[35rem] flex-1 shrink basis-[23rem] rounded-3xl bg-cover bg-center shadow-md xl:max-w-[28.125rem]`}
        />
        <div className="max-w-[700px] flex-1 space-y-4">
          <div className="flex items-start justify-between gap-4">
            <h1 className="line-clamp-2 py-1 text-5xl font-black">
              {recipe.name}
            </h1>
            <LikeAndSend likes={recipe.likes} className="mt-2 hidden sm:flex" />
          </div>
          <p className="max-w-[37.5rem]">{recipe.recipe.info.description}</p>
          <div className="flex items-center gap-4">
            <Pill
              content={`by ${recipe.author}`}
              image={`/profile-pictures/${recipe.authorProfile}`}
            />
            <LikeAndSend likes={recipe.likes} className="flex sm:hidden" />
          </div>

          <div className="flex max-w-[500px] justify-around flex-wrap gap-3">
            <InfoBox type="calorie" value="250 kcal" />
            <InfoBox type="cookTime" value="30 mins" />
            <InfoBox type="difficulty" value="Hard" />
            <InfoBox type="servings" value="8" />
          </div>
        </div>
      </article>

      <div className="space-y-8">
        <InfoBlock title="Ingredients" content={recipe.recipe.ingredients} />
        <InfoBlock title="Instructions" content={recipe.recipe.instructions} />
      </div>
    </Page>
  );
};
export default page;

const InfoBlock = ({ title, content }) => {
  return (
    <div
      className={cn("max-w-[550px]", {
        "space-y-5": typeof content === "object",
      })}
    >
      <h2 className="text-4xl font-bold">{title}</h2>
      <div
        className={cn({
          "whitespace-pre-line": typeof content === "string",
          "list-inside list-disc": typeof content === "object",
        })}
      >
        {typeof content === "string"
          ? content
          : typeof content === "object" &&
            content.map((data, id) => <li key={id}>{data}</li>)}
      </div>
    </div>
  );
};
