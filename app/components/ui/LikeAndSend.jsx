import { cn } from "@/app/lib/utils";
import { HeartIcon, PaperAirplaneIcon } from "@heroicons/react/24/outline";

const LikeAndSend = ({className, likes, ...props}) => {
  return (
    <div {...props} className={cn("flex items-center gap-3", className)}>
      <button className="bg-foreground shadow-sm flex items-center gap-1 rounded-full px-3 py-2 text-love outline-none transition-all">
        <HeartIcon className="w-6" />
        {likes}
      </button>
      <button className="bg-foreground shadow-sm rounded-full px-3 py-2 outline-none transition-all">
        <PaperAirplaneIcon className="w-6" />
      </button>
    </div>
  );
};
export default LikeAndSend;
