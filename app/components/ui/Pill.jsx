import { cn } from "@/app/lib/utils";
import Image from "next/image";

const Pill = ({ content, image, responsive }) => {
  return (
    <div
      className={cn(
        "inline-flex h-[43.19px] max-w-56 items-center gap-2 rounded-full px-2 py-1 md:px-4 md:shadow-sm",
        {
          "md:bg-foreground": responsive,
          "bg-foreground": !responsive
        },
      )}
    >
      <p
        className={cn("font-medium line-clamp-1", {
          "hidden md:block": responsive,
        })}
      >
        {content}
      </p>
      {image && (
        <Image
          src={image}
          alt=""
          width={30}
          height={30}
          className="rounded-full"
        />
      )}
    </div>
  );
};

export default Pill;
