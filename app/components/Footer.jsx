import Image from "next/image";
import Link from "next/link";

const CipiwebsLink = "https://cipiwebs.vercel.app";

// eslint-disable-next-line react/display-name
const CipiWebs = () => {
  return (
    <Link href={CipiwebsLink} target="_blank" role="button" className="group">
      <h4 className="inline-block text-copy-light group-hover:text-copy">
        Made by
      </h4>{" "}
      <Image
        src={"images/cipiwebs.svg"}
        alt="CipiWebs logo"
        width={80}
        height={40}
        className="inline-block h-auto shrink-0"
      />
    </Link>
  );
};

const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-around gap-1 py-10">
      <CipiWebs />

      <h5 className="flex-1 text-center text-sm text-copy-light">
        © 2024 Yumy. All rights reserved.{" "}
      </h5>
    </footer>
  );
};

export default Footer;
