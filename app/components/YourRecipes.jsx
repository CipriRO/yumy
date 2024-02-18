import Image from "next/image";
import HomeContainer from "./HomeContainer";
import { HeartIcon } from "@heroicons/react/24/solid";
import { HeartIcon as HeartOutline } from "@heroicons/react/24/outline";

const YourRecipes = () => {
  return (
    <HomeContainer className="flex items-center gap-10">
      <div>
        <h2 className="mb-3 font-bold text-3xl">Your Recipes, Your Platform</h2>

        <p className="text-text-700 w-[661px]">
          Showcase your culinary skills by sharing your favorite recipes on
          Yumy. Let others savor your creations while you gain recognition as a
          talented home chef. With just a few clicks, you can upload your
          recipes and inspire others to get creative in their own kitchens.
        </p>
      </div>

      <div className="flex flex-col gap-3 mx-auto w-[27rem]">
        {Comments.map((comment, index) => (
          <HomeComment
            key={index}
            name={comment.name}
            content={comment.content}
            profile_picture={comment.profile_picture}
            liked={comment.liked}
            likes={comment.likes}
            time={comment.time}
          >
            {comment.replies &&
              comment.replies.map((reply, index) => (
                <HomeComment
                  key={index}
                  name={reply.name}
                  content={reply.content}
                  profile_picture={reply.profile_picture}
                  liked={reply.liked}
                  likes={reply.likes}
                  time={reply.time}
                />
              ))}
          </HomeComment>
        ))}
      </div>
    </HomeContainer>
  );
};

export default YourRecipes;

const HomeComment = ({
  name,
  content,
  profile_picture,
  liked,
  likes,
  time,
  children,
}) => {
  return (
    <div className="flex gap-3">
      <div className="flex-shrink-0 flex flex-col items-center w-8 gap-2">
        <Image
          src={`/profile-pictures/${profile_picture}`}
          alt="Profile picture"
          width={30}
          height={30}
          className="rounded-full"
        />
        {children && (
          <div className="w-1 h-full rounded-full bg-background-200 mb-3" />
        )}
      </div>

      <div>
        <h4 className="font-bold inline">{name}</h4>{" "}
        <p className="text-text- inline">{content}</p>
        <div className="text-text-700 text-sm mt-1 flex gap-2 mb-3">
          <button
            className={
              liked ? "text-love drop-shadow-[0_1px_3px_#EB5C68]" : undefined
            }
          >
            {liked ? (
              <HeartIcon className="size-5" />
            ) : (
              <HeartOutline className="size-5 stroke-2 stroke-text-600" />
            )}
          </button>

          <button>Reply</button>
          <p>{time}</p>
          {likes && <p>{likes} likes</p>}
        </div>
        {children}
      </div>
    </div>
  );
};

const Comments = [
  {
    name: "Merle Raco",
    content:
      "Wow, this recipe looks absolutely mouthwatering! The combination of flavors and ingredients has me drooling already. Can't wait to give it a try!",
    profile_picture: "man-1.jpg",
    liked: true,
    likes: "23k",
    time: "2h",
    replies: [
      {
        name: "Eleanora Nazemi",
        content:
          "Thanks so much for your kind words! It's always wonderful to hear that someone is excited to try out a recipe. I hope you enjoy making it as much as I did. Happy cooking!",
        profile_picture: "woman-1.jpg",
        time: "1h",
        liked: true
      },
    ],
  },
  {
    name: "Dwain Zoet",
    content:
      "This recipe is exactly what I've been craving lately! The photos are making my stomach growl just looking at them. Definitely saving this one!",
    profile_picture: "man-2.jpg",
    likes: "731",
    time: "13m",
  },
];
