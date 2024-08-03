import { cn } from "@/app/lib/utils";
import Image from "next/image";

const Pill = ({ content, image, responsive }) => {
  return (
    <div
      className={cn(
        "flex min-h-[43.19px] max-w-56 items-center justify-center gap-2 rounded-full py-1 px-4 md:shadow-sm",
        {
          "md:bg-foreground": responsive,
          "bg-foreground": !responsive
        },
      )}
    >
      <p
        className={cn("font-medium line-clamp-2", {
          "hidden md:block": responsive,
        })}
      >
        {content}
      </p>
      {image && (
        <Image
          src={image}
          alt=""
          width={35}
          height={35}
          className="rounded-full"
        />
      )}
    </div>
  );
};

export default Pill;
