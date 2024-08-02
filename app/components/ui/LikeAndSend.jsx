import { cn } from "@/app/lib/utils";
import { HeartIcon, PaperAirplaneIcon } from "@heroicons/react/24/outline";
import Button from "./Button";

const LikeAndSend = ({ className, likes, ...props }) => {
  return (
    <div {...props} className={cn("flex items-center gap-3", className)}>
      <Button className="flex items-center gap-1 text-love">
        <HeartIcon className="w-6" />
        {likes}
      </Button>
      <Button>
        <PaperAirplaneIcon className="w-6" />
      </Button>
    </div>
  );
};
export default LikeAndSend;
