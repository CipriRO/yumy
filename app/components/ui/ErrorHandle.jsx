"use client";
import { ArrowPathIcon, ArrowUturnLeftIcon } from "@heroicons/react/20/solid";
import Button from "./Button";
import { useRouter } from "next/navigation";

const ErrorHandle = ({ reset }) => {
  const router = useRouter();

  return (
    <div className="mx-auto my-auto flex flex-col items-center justify-center space-y-5">
      <div className="max-w-[600px] space-y-2 text-center">
        <h2 className="text-3xl font-bold">Ooops something went wrong!</h2>
        <p>
          Looks like we hit a snag. Your experience is what matters most, so a
          fix is top priority. We&apos;re on it.
        </p>
      </div>
      <div className="flex gap-3">
        <Button
          className="flex items-center gap-2"
          onClick={() => router.back()}
        >
          <ArrowUturnLeftIcon className="inline w-5" />
          Go back
        </Button>
        <Button className="flex items-center gap-2" onClick={() => reset()}>
          <ArrowPathIcon className="inline w-5" />
          Try again
        </Button>
      </div>
    </div>
  );
};
export default ErrorHandle;
