"use client";

import { useRouter } from "next/navigation";

const BackButton = () => {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      type="submit"
      className="w-1/2 border-[1px] border-border text-copy-light shadow px-5 py-3 rounded-2xl font-medium hover:scale-[1.02] active:scale-[0.98] transition-all ease-linear will-change-transform"
    >
      Go back
    </button>
  );
};
export default BackButton;
