import Image from "next/image"
import Link from "next/link";

const Hero = () => {
  return (
    <section className="flex items-center lg:mx-16 mx-5 mr-7 my-24 lg:my-32">
      <div className="flex flex-col justify-center items-start md:w-4/6 sm:w-5/6">
        <h1 className="text-pretty lg:text-6xl text-5xl font-black text-text mb-3">
          Discover Something Yummy Every Day!
        </h1>

        <p className="text-balance mb-8 text-text-700 w-5/6">
          Connect, cook, and make new friends with our social media platform
          dedicated to sharing delicious recipes!
        </p>

        <Link href="/login" role="button" className="py-3 px-16 font-semibold text-slate-50 rounded-full bg-primary-500 shadow-lg shadow-primary hover:-translate-y-1 hover:scale-105 transition-transform">
          Get started
        </Link>
      </div>

      <Image
        src="/images/hero.png"
        alt="Image of a sallad"
        className="drop-shadow-[0px_0px_10px_#212922] -z-20 absolute lg:right-0 sm:-right-52 md:-right-40 -right-64"
        height={500}
        width={500}
        priority
      />
    </section>
  );
}

export default Hero