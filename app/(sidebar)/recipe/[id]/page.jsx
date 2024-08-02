import InfoBox from "@/app/components/ui/InfoBox";
import LikeAndSend from "@/app/components/ui/LikeAndSend";
import Loading from "@/app/components/ui/Loading";
import Page from "@/app/components/ui/Page";
import Pill from "@/app/components/ui/Pill";
import { getRecipeById } from "@/app/lib/getData";
import { cn } from "@/app/lib/utils";
import { Suspense } from "react";

// export async function generateMetadata({ params }) {
//   return { title: RecipesList[params.id].name };
// }

const page = ({ params }) => {
  return (
    <Page className="space-y-11">
      <Suspense fallback={<Loading />}>
        <PageContent id={params.id} />
      </Suspense>
    </Page>
  );
};
export default page;

const PageContent = async ({ id }) => {
  const recipe = await getRecipeById(id);

  return (
    <>
      <article className="mt-3 flex flex-col-reverse justify-center gap-x-5 gap-y-10 xl:flex-row">
        <div
          style={{ backgroundImage: `url(/recipe-images/${recipe.image})` }}
          className={`h-[20rem] max-w-[35rem] flex-1 shrink basis-[23rem] rounded-3xl bg-cover bg-center shadow-md xl:max-w-[28.125rem]`}
        />
        <div className="max-w-[700px] flex-1 space-y-6 sm:space-y-4">
          <div className="flex items-start justify-between gap-4">
            <h1 className="line-clamp-2 py-1 text-5xl font-black">
              {recipe.name}
            </h1>
            <LikeAndSend likes={recipe.likes} className="mt-2 hidden sm:flex" />
          </div>
          <p className="max-w-[37.5rem]">{recipe.recipe.info.description}</p>
          <div className="flex flex-wrap items-center gap-4">
            <Pill
              content={`by ${recipe.author}`}
              image={`/profile-pictures/${recipe.authorProfile}`}
            />
            <LikeAndSend likes={recipe.likes} className="flex sm:hidden" />
          </div>
          <div className="grid max-w-[490px] grid-cols-[repeat(auto-fit,107px)] flex-wrap justify-center gap-5 sm:justify-between sm:gap-3">
            <InfoBox
              type="calorie"
              value={recipe.recipe.info.caloriesPerServing}
            />
            <InfoBox type="cookTime" value={recipe.recipe.info.cookTime} />
            <InfoBox type="difficulty" value={recipe.recipe.info.difficulty} />
            <InfoBox type="servings" value={recipe.recipe.info.servings} />
          </div>
        </div>
      </article>
      <div className="space-y-8">
        <InfoBlock title="Ingredients" content={recipe.recipe.ingredients} />
        <InfoBlock title="Instructions" content={recipe.recipe.instructions} />
      </div>
    </>
  );
};

const InfoBlock = ({ title, content }) => {
  return (
    <div className="max-w-[550px] space-y-5">
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
