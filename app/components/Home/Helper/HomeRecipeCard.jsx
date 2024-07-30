import { HeartIcon } from "@heroicons/react/24/solid";

const HomeRecipeCard = ({ name, autor, image, likes, style, small }) => {
  return (
    <article
      style={{ backgroundImage: `url(/recipe-images/${image})`, ...style }}
      className={`relative w-full grow bg-cover bg-center text-slate-100 shadow-xl ${
        small ? "max-w-60" : "max-w-[27rem]"
      } z-0 aspect-video flex-shrink overflow-hidden rounded-3xl shadow-lg`}
    >
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
            {autor}
          </p>
        </div>

        {likes && (
          <div className="flex items-center gap-1 text-[#E94959]">
            <HeartIcon className="w-6" />
            <span className="font-medium">{likes}</span>
          </div>
        )}
      </div>
    </article>
  );
};

export default HomeRecipeCard;
