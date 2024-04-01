import Image from "next/image";
import Link from "next/link";

const CipiwebsLink = "https://cipiwebs.vercel.app";

// eslint-disable-next-line react/display-name
const CipiWebs = () => {
  return (
    <Link href={CipiwebsLink} target="_blank" role="button" className="group">
      <h4 className="text-copy-light inline-block group-hover:text-copy">
        Made by
      </h4>{" "}
      <Image
        src={"images/cipiwebs.svg"}
        alt="CipiWebs logo"
        width={80}
        height={40}
        className="shrink-0 h-auto inline-block"
      />
    </Link>
  );
};

const Footer = () => {
  return (
    <footer className="flex flex-col justify-around items-center py-10 gap-1">
      <CipiWebs />

      <h5 className="flex-1 text-copy-light text-sm text-center">
        © 2024 Yumy. All rights reserved.{" "}
      </h5>
    </footer>
  );
};

export default Footer;
