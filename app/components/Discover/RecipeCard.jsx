import { HeartIcon } from "@heroicons/react/24/solid";

const RecipeCard = ({ name, autor, image, likes, style, small }) => {
  return (
    <article
      style={{ backgroundImage: `url(/recipe-images/${image})`, ...style }}
      className={`text-slate-100  shadow-xl relative bg-cover bg-center w-80 grow ${
        small ? "max-w-60" : "max-w-[27rem]"
      } flex-shrink aspect-video shadow-lg rounded-3xl overflow-hidden z-0 cursor-pointer hover:scale-105 transition-transform`}
    >
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
            {autor}
          </p>
        </div>

        {likes && (
          <div className="flex gap-1 items-center text-[#E94959]">
            <HeartIcon className="w-6" />
            <span className="font-medium">{likes}</span>
          </div>
        )}
      </div>
    </article>
  );
};

export default RecipeCard;
