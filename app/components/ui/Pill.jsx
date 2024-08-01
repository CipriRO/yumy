import Image from "next/image";

const Pill = ({content, image}) => {

  return (
    <div className="inline-flex max-w-56 h-[43.19px] items-center gap-2 rounded-full px-1 py-1 md:bg-foreground md:px-4 md:shadow-sm">
      <p className="font-medium md:line-clamp-1">
        {content}
      </p>
      {image && <Image
        src={image}
        alt=""
        width={30}
        height={30}
        className="rounded-full"
      />}
    </div>
  );
};

export default Pill;
