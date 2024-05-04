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
        `max-w-[27rem] text-slate-100 relative bg-cover bg-center w-full flex-shrink aspect-video shadow-lg rounded-3xl overflow-hidden z-0 cursor-pointer transition-all ease-in-out will-change-transform hover:scale-[1.02] focus-visible:scale-[1.02] !ring-primary-dark`,
        {
          small: "max-w-60",
        }
      )}
    >
      {/* <div className="absolute flex items-center gap-1 right-3 top-2 py-1 px-2 rounded-full shadow-sm backdrop-blur-lg">
        <ClockIcon className="w-5 inline-block" />6 min
      </div> */}

      <div
        className={`flex justify-between gap-3 absolute bottom-0 left-0 right-0 ${
          small ? "px-4 pb-2 pt-16" : "px-5 pb-4 pt-28"
        } bg-gradient-to-t from-[#000000e7] to-transparent`}
      >
        <div>
          <h4
            className={`font-semibold line-clamp-1 ${
              small ? "sm:text-base text-sm" : "sm:text-xl text-lg"
            }`}
          >
            {name}
          </h4>
          <p
            className={`text-stone-400 line-clamp-1 ${
              small ? "text-sm" : undefined
            }`}
          >
            {author}
          </p>
        </div>

        {likes && (
          <div className="flex gap-1 items-center text-[#E94959]">
            <HeartIcon className="w-6" />
            <span className="font-medium">{likes}</span>
          </div>
        )}
      </div>
    </Link>
  );
};

export default RecipeCard;
