import Image from "next/image";
import Link from "next/link";

const CipiwebsLink = "https://cipiwebs.vercel.app";

const Footer = () => {
  return (
    <footer className="flex justify-center items-center px-3 pb-2 gap-5">
      <LegalLinks />

      <h5 className="font-medium text-text-700 ml-auto">
        ©Copyright 2024 <span className="font-bold text-primary-500">Yumy</span>
      </h5>

      <CipiWebs className="ml-auto" />
    </footer>
  );
};

export default Footer;

const CipiWebs = ({ className }) => {
  return (
    <Link
      href={CipiwebsLink}
      target="_blank"
      role="button"
      className={`flex flex-col bg-white/40 py-1 px-5 rounded-2xl shadow-sm border-[1px] border-background-100 ${className}`}
    >
      <h4 className="font-medium text-text-600">Made by</h4>
      <Image
        src={"images/cipiwebs.svg"}
        alt="CipiWebs logo"
        width={100}
        height={50}
        className="shrink-0"
      />
    </Link>
  );
};

const LegalLinks = () => {
  const links = ["Privacy Policy", "Terms and Conditions", "Cookie Policy"];

  return (
    <div className="font-medium hover:*:underline *:cursor-pointer">
      {links.map((link, index) => (
        <p key={index}>{link}</p>
      ))}
    </div>
  );
};
