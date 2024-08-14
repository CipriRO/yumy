import { cn } from "@/app/lib/utils";
import Image from "next/image";

const Pill = ({ content, image, responsive, containerStyle, contentStyle }) => {
  return (
    <div
      className={cn(
        containerStyle,
        "flex min-h-[43.19px] max-w-56 items-center justify-center gap-2 rounded-full px-4 py-1 md:shadow-sm",
        {
          "md:bg-foreground": responsive,
          "bg-foreground": !responsive,
        },
      )}
    >
      <p
        className={cn("line-clamp-2 font-medium", {
          "hidden md:line-clamp-1": responsive,
        }, contentStyle)}
      >
        {content}
      </p>
      {image && (
        <Image
          src={image}
          alt=""
          width={35}
          height={35}
          className="rounded-full w-[35px]"
        />
      )}
    </div>
  );
};

export default Pill;
