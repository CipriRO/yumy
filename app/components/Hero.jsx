import Image from "next/image"
import Link from "next/link";
import HomeContainer from "./HomeContainer";

const Hero = () => {
  return (
    <HomeContainer className="flex items-center">
      <div className="flex flex-col justify-center items-start md:w-4/6 sm:w-11/12">
        <h1 className="text-pretty lg:text-6xl text-5xl font-black text-text mb-3">
          Discover Something Yummy Every Day!
        </h1>

        <p className="mb-8 text-text-700 w-9/12">
          Connect, Share, and Explore Delicious Recipes with Yumy - The Ultimate
          Social Media Platform for Food Enthusiasts!
        </p>

        <Link
          href="/login"
          role="button"
          className="py-3 px-16 font-semibold text-slate-50 rounded-full bg-primary-500 shadow-lg shadow-primary hover:-translate-y-1 hover:scale-105 transition-transform"
        >
          Get started
        </Link>
      </div>

      <Image
        src="/images/hero.png"
        alt="Image of a sallad"
        className="drop-shadow-[0px_0px_10px_#212922] -z-20 absolute lg:right-4 sm:-right-52 md:-right-40 -right-64"
        height={500}
        width={500}
        priority
      />
    </HomeContainer>
  );
}

export default Hero