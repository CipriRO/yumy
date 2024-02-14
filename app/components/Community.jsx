import HomeContainer from "./HomeContainer";
import { HeartIcon, StarIcon } from "@heroicons/react/24/solid";

const Community = () => {
  return (
    <HomeContainer className="flex flex-col items-center">
      <h2 className="mb-9 font-bold sm:text-5xl text-4xl text-center">
        <span className="text-primary">Yumy..</span> Where Food Enthusiasts
        Unite
      </h2>

      <div className="relative flex flex-col w-full aspect-video">
        {Recipes.map((recipe, index) => (
          <RecipeCard
            key={index}
            index={index}
            name={recipe.name}
            autor={recipe.autor}
            image={recipe.image}
            likes={recipe.likes}
            style={`top: ${index*30}`}
            length={Recipes.length}
          />
        ))}
      </div>

      {/* <p className="text-text-700 md:w-10/12">
        Yumy brings together a vibrant community of passionate food lovers from
        all corners of the globe. Discover mouthwatering recipes from different
        cultures, exchange culinary ideas, and make new friends who share your
        love for cooking.
      </p> */}
    </HomeContainer>
  );
};

export default Community;

const RecipeCard = ({ name, autor, image, likes, index, style, length }) => {
  return (
    <div
      style={`background-image: url(/images/${image}); ${style}`}
      className={`absolute bg-cover bg-center w-full max-w-[35rem] aspect-video rounded-3xl mb-2 shadow-lg overflow-hidden -z-10`}
    >
      {index && length && index === length - 1 && (
        <div className="flex justify-between absolute top-0 left-0 right-0 px-5 pb-7 pt-4 bg-gradient-to-b from-[#000000c7] to-transparent">
          <p className="font-medium text-[#ECC209] flex justify-center w-full items-center gap-1 mb-1">
            <StarIcon className="w-5" /> Recipe of the year 2023
          </p>
        </div>
      )}

      <div className="flex justify-between absolute bottom-0 left-0 right-0 px-5 pb-4 pt-14 bg-gradient-to-t from-[#000000c7] to-transparent">
        <div>
          <h4 className="font-semibold sm:text-xl text-lg text-background-50">
            {name}
          </h4>
          <p className="text-background-300">{autor}</p>
        </div>

        <div className="flex gap-1 items-center text-[#E94959]">
          <HeartIcon className="w-6" />
          <span className="font-medium">{likes}</span>
        </div>
      </div>
    </div>
  );
};

const Recipes = [
  {
    name: "Grill Chicken",
    autor: "Emily Rodriguez",
    likes: "10.2M",
    image: "recipe-community-2.jpg",
  },
  {
    name: "Savory Dutch Baby",
    autor: "Adam Patel",
    likes: "982K",
    image: "recipe-community-1.jpg",
  },
  {
    name: "Ziti-Style Spaghetti Squash",
    autor: "Sophia Nguyen",
    likes: "91.3M",
    middle: true,
    image: "recipe-of-the-year.jpg",
  },
];
