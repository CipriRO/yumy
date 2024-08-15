import { cn } from "@/app/lib/utils";
import { HeartIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

const HomeRecipeCard = ({ recipe, small }) => {
  const { name, likes, image, blurImage, user } = recipe;

  return (
    <article
      className={`relative w-full grow text-slate-100 shadow-xl ${
        small ? "max-w-60" : "max-w-[27rem]"
      } z-0 aspect-video flex-shrink overflow-hidden rounded-3xl shadow-lg`}
    >
      <Image
        src={image}
        alt={name}
        fill={true}
        placeholder="blur"
        blurDataURL={blurImage}
        className="absolute object-cover object-center"
        sizes="(max-width: 600px) 100vw, 50vw"
      />

      <div
        className={`absolute bottom-0 left-0 right-0 flex justify-between gap-3 ${
          small ? "px-4 pb-2 pt-16" : "px-5 pb-4 pt-28"
        } bg-gradient-to-t from-[#000000e7] to-transparent`}
      >
        <div>
          <h4
            className={`line-clamp-2 !leading-5 font-semibold ${
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
            {user.name}
          </p>
        </div>

        {likes && (
          <div className="flex items-center gap-1 text-[#E94959]">
            <HeartIcon className={cn({
              "w-6" : !small,
              "w-5" : small
            })} />
            <span className={cn("font-medium", {
              "text-base" : !small,
              "text-sm" : small
            })}>{likes}</span>
          </div>
        )}
      </div>
    </article>
  );
};

export default HomeRecipeCard;
