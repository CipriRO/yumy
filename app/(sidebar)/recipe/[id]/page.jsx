import InfoBox from "@/app/components/ui/InfoBox";
import LikeAndSend from "@/app/components/ui/LikeAndSend";
import Loading from "@/app/components/ui/Loading";
import Page from "@/app/components/ui/Page";
import Pill from "@/app/components/ui/Pill";
import { getRecipeById, getRecipes } from "@/app/lib/getData";
import { cn } from "@/app/lib/utils";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Suspense } from "react";

export async function generateMetadata({ params }) {
  const data = await getRecipeById(params.id);
  if (!data) notFound();
  const { name, description } = data;
  return { title: name, description };
}

export async function generateStaticParams() {
  const recipes = await getRecipes();
  return recipes.map((recipe) => ({ id: recipe._id.toString() }));
}

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
  const data = await getRecipeById(id);
  if (!data) notFound();
  const {
    name,
    image,
    blurImage,
    user,
    likes,
    recipe: { info, ingredients, instructions },
  } = data;

  return (
    <>
      <article className="mt-3 flex flex-col-reverse justify-center gap-x-5 gap-y-10 xl:flex-row">
        <Image placeholder="blur" blurDataURL={blurImage} src={image} alt={name} height={320} width={560} priority={true} className="h-[20rem] w-auto max-w-[35rem] flex-1 shrink basis-[21.5rem] rounded-3xl object-cover object-center shadow-md xl:max-w-[28.125rem]" />

        <div className="max-w-[700px] flex-1 space-y-5 sm:space-y-4">
          <div className="flex items-start justify-between gap-4">
            <h1 className="line-clamp-2 py-1 text-5xl font-black">{name}</h1>
          </div>
          <p className="max-w-[37.5rem]">{info.description}</p>
          <div className="flex flex-wrap items-center gap-4">
            <Pill content={user.name} image={user.image} />
            <LikeAndSend likes={likes} />
          </div>
          <div className="grid max-w-[490px] grid-cols-[repeat(auto-fit,107px)] flex-wrap justify-center gap-5 sm:justify-between sm:gap-3">
            <InfoBox type="calorie" value={info.caloriesPerServing} />
            <InfoBox type="cookTime" value={info.cookTime} />
            <InfoBox type="difficulty" value={info.difficulty} />
            <InfoBox type="servings" value={info.servings} />
          </div>
        </div>
      </article>
      <div className="space-y-8">
        <InfoBlock title="Ingredients" content={ingredients} />
        <InfoBlock title="Instructions" content={instructions} />
      </div>
    </>
  );
};

export const InfoBlock = ({ title, content }) => {
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
