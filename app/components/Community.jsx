import Image from "next/image";
import HomeContainer from "./HomeContainer";
import {
  HeartIcon,
  ShareIcon,
  StarIcon,
  ChatBubbleLeftEllipsisIcon,
} from "@heroicons/react/20/solid";

const Community = () => {
  return (
    <HomeContainer className="flex flex-col items-center rounded-3xl py-5 px-5">
      <h2 className="mb-7 font-bold text-5xl">
        <span className="text-primary">Yumy..</span> Where Food Enthusiasts
        Unite
      </h2>

        <div className="bg-background-100 shadow rounded-2xl w-[28rem] px-3 py-2">
          <p className="font-medium text-[#ECC209] flex justify-center items-center gap-1 mb-1">
            <StarIcon className="w-5" /> Recipe of the year 2023
          </p>
          <div className="bg-[url('/images/recipe-of-the-year.jpg')] bg-cover bg-center w-full aspect-[16/7] rounded-2xl mb-2" />
          <h4 className="font-semibold text-lg">Ziti-Style Spaghetti Squash</h4>
          <p className="text-text-400 mb-4">Jenny Buckson</p>
          <div className="flex gap-3 justify-center text-text-500">
            <button className="flex items-center gap-1 ">
              <HeartIcon className="w-5" /> 91.3M
            </button>
            &#183;
            <button className="text-share flex items-center gap-1">
              <ChatBubbleLeftEllipsisIcon className="w-5" /> 91.3M
            </button>
            &#183;
            <button className="flex items-center gap-1">
              <ShareIcon className="w-5" /> 62.1M
            </button>
          </div>
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
