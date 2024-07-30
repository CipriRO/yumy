import { cn } from "@/app/lib/utils";
import { HeartIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
//import { ClockIcon } from "@heroicons/react/20/solid";

const RecipeCard = ({ name, author, image, likes, style, small }) => {
  return (
    <Link
      href="#"
      style={{ backgroundImage: `url(/recipe-images/${image})`, ...style }}
      className={cn(
        `relative z-0 aspect-video w-full max-w-[27rem] flex-shrink cursor-pointer overflow-hidden rounded-3xl bg-cover bg-center text-slate-100 shadow-lg !ring-primary-dark transition-all ease-in-out will-change-transform hover:scale-[1.02] focus-visible:scale-[1.02]`,
        {
          small: "max-w-60",
        },
      )}
    >
      {/* <div className="absolute flex items-center gap-1 right-3 top-2 py-1 px-2 rounded-full shadow-sm backdrop-blur-lg">
        <ClockIcon className="w-5 inline-block" />6 min
      </div> */}

      <div
        className={`absolute bottom-0 left-0 right-0 flex justify-between gap-3 ${
          small ? "px-4 pb-2 pt-16" : "px-5 pb-4 pt-28"
        } bg-gradient-to-t from-[#000000e7] to-transparent`}
      >
        <div>
          <h4
            className={`line-clamp-1 font-semibold ${
              small ? "text-sm sm:text-base" : "text-lg sm:text-xl"
            }`}
          >
            {name}
          </h4>
          <p
            className={`line-clamp-1 text-stone-400 ${
              small ? "text-sm" : undefined
            }`}
          >
            {author}
          </p>
        </div>

        {likes && (
          <div className="flex items-center gap-1 text-[#E94959]">
            <HeartIcon className="w-6" />
            <span className="font-medium">{likes}</span>
          </div>
        )}
      </div>
    </Link>
  );
};

export default RecipeCard;
