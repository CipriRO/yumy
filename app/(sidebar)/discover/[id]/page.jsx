import Search from "@/app/components/Discover/Search";
import { RecipesList } from "@/app/constants/home";
import { HeartIcon, PaperAirplaneIcon } from "@heroicons/react/24/outline";

export async function generateMetadata({ params }) {
  return { title: RecipesList[params.id].name };
}

const page = ({ params }) => {
  const recipe = RecipesList[params.id];
  return (
    <main className="h-screen flex-1 overflow-y-auto p-9 pt-3">
      <div className="mx-auto max-w-[1200px]">
        <Search />
        <div className="mt-9 flex justify-center gap-10">
          <div
            style={{ backgroundImage: `url(/recipe-images/${recipe.image})` }}
            className={`h-[22rem] w-[28.125rem] shrink-0 rounded-3xl bg-cover bg-center shadow-md`}
          />
          <div className="p-3">
            <div className="mb-6 flex items-center justify-between">
              <h1 className="text-5xl font-black">{recipe.name}</h1>
              <div className="flex items-center gap-3">
                <button className="rounded-full p-2 outline-none transition-all hover:bg-border hover:shadow-md focus:bg-border focus:shadow-md">
                  <HeartIcon className="w-6 text-love" />
                </button>

                <button className="rounded-full p-2 outline-none transition-all hover:bg-border hover:shadow-md focus:bg-border focus:shadow-md">
                  <PaperAirplaneIcon className="w-6" />
                </button>
              </div>
            </div>
            <p className="max-w-[37.5rem]">{recipe.recipe.info.description}</p>
          </div>
        </div>
      </div>
    </main>
  );
};
export default page;
