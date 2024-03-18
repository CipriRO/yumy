import { HeartIcon } from "@heroicons/react/24/solid";
import { HeartIcon as HeartOutline } from "@heroicons/react/24/outline";
import Image from "next/image";

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
        {children && <div className="w-1 h-full rounded-full bg-border mb-3" />}
      </div>

      <div>
        <h4 className="font-bold inline">{name}</h4>{" "}
        <p className="inline">{content}</p>
        <div className="text-text-700 text-sm mt-1 flex gap-2">
          <div
            className={
              liked ? "text-love drop-shadow-[0_1px_3px_#EB5C68]" : undefined
            }
          >
            {liked ? (
              <HeartIcon className="size-5" />
            ) : (
              <HeartOutline className="size-5 stroke-2 stroke-copy-light" />
            )}
          </div>

          <p>Reply</p>
          <p>{time}</p>
          {likes && <p>{likes} likes</p>}
        </div>
        {children}
      </div>
    </div>
  );
};

export default HomeComment