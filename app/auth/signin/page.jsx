import { signIn } from "@/auth";
import { providerMap } from "@/auth.config";
import Image from "next/image";
import DisplayError from "./DisplayError";
import { Suspense } from "react";

export const metadata = {
  title: "Account Access",
  description: "Access your Yumy account!",
};

const page = () => {
  return (
    <main className="flex min-h-screen items-center justify-center p-3">
      <article className="max-w-[30.5rem] flex-1 space-y-7 rounded-3xl bg-foreground px-7 py-6 shadow-lg">
        <h2 className="text-3xl font-bold text-primary">Yumy</h2>

        <div className="mx-auto max-w-[355px] space-y-8">
          <div className="space-y-4">
            <h1 className="text-pretty text-center text-4xl font-bold tracking-tighter">
              Account Access
            </h1>
            <p className="text-center text-base leading-tight">
              Whether you have an account or not, you can access Yumy using the
              providers below!
            </p>
          </div>

          <div className="flex flex-col space-y-4">
            {providerMap.map((provider, idx) => (
              <form
                key={idx}
                action={async () => {
                  "use server";

                  await signIn(provider.id);
                }}
              >
                <button
                  type="submit"
                  className="flex w-full items-center gap-5 rounded-2xl border-[1px] border-border px-5 py-3 font-medium text-copy-light shadow transition-all ease-linear will-change-transform hover:scale-[1.02] active:scale-[0.98]"
                >
                  <Image
                    src={`/logos/${provider.id}-logo.png`}
                    alt={`${provider.name} logo`}
                    width={28}
                    height={28}
                  />
                  Continue with {provider.name}
                </button>
              </form>
            ))}
            <Suspense>
              <DisplayError />
            </Suspense>
          </div>

          <p className="text-center text-sm text-copy-lighter">
            By continuing, you agree to Yumy’s Terms of Service and Privacy
            Policy
          </p>
        </div>
      </article>
    </main>
  );
};
export default page;
