import { cn } from "@/app/lib/utils";
import { HeartIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

const RecipeCard = async ({ recipe, style, small }) => {
  const { _id, name, image, user, likes } = await recipe;

  return (
    <Link
      href={`/recipe/${_id}`}
      style={{ backgroundImage: `url(${image})`, ...style }}
      className={cn(
        `relative z-0 aspect-video w-full max-w-[27rem] flex-shrink cursor-pointer overflow-hidden rounded-3xl bg-cover bg-center text-slate-100 shadow-lg !ring-primary-dark transition-all ease-in-out will-change-transform hover:scale-[1.02] focus-visible:scale-[1.02]`,
        {
          small: "max-w-60",
        },
      )}
    >
      <div
        className={`absolute bottom-0 left-0 right-0 flex justify-between items-end gap-3 ${
          small ? "px-4 pb-2 pt-16" : "px-5 pb-4 pt-28"
        } bg-gradient-to-t from-[#000000e7] to-transparent`}
      >
        <div>
          <h2
            className={`line-clamp-2 !leading-6 font-semibold ${
              small ? "text-sm sm:text-base" : "text-lg sm:text-xl"
            }`}
          >
            {name}
          </h2>
          <p
            className={`line-clamp-1 text-stone-400 ${
              small ? "text-sm" : undefined
            }`}
          >
            {user.name}
          </p>
        </div>

        {likes && (
          <div className="flex items-center gap-1 text-[#E94959] mb-2">
            <HeartIcon className="w-6" />
            <span className="font-medium">{likes}</span>
          </div>
        )}
      </div>
    </Link>
  );
};

export default RecipeCard;
