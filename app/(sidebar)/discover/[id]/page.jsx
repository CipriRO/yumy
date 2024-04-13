import Search from "@/app/components/Discover/Search";
import { RecipesList } from "@/app/constants/home";
import { HeartIcon, PaperAirplaneIcon } from "@heroicons/react/24/outline";

export async function generateMetadata({ params }) {
  return { title: RecipesList[params.id].name };
}

const page = ({ params }) => {
  const recipe = RecipesList[params.id];
  return (
    <main className="flex-1 p-9 pt-3 h-screen overflow-y-auto">
      <div className="max-w-[1200px] mx-auto">
        <Search />
        <div className="flex justify-center gap-10 mt-9">
          <div
            style={{ backgroundImage: `url(/recipe-images/${recipe.image})` }}
            className={`w-[28.125rem] h-[22rem] shrink-0 bg-cover bg-center rounded-3xl shadow-md`}
          />
          <div className="p-3">
            <div className="flex justify-between items-center mb-6">
              <h1 className="font-black tracking-tight text-5xl">
                {recipe.name}
              </h1>
              <div className="flex items-center gap-3">
                <button className="rounded-full p-2 hover:bg-border hover:shadow-md outline-none focus:bg-border focus:shadow-md transition-all">
                  <HeartIcon className="w-6 text-love" />
                </button>

                <button className="rounded-full p-2 hover:bg-border hover:shadow-md outline-none focus:bg-border focus:shadow-md transition-all">
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
