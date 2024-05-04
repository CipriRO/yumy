import { signIn } from "@/auth";
import { providerMap } from "@/auth.config";
import Image from "next/image";

export const metadata = {
  title: "Account Access",
  description: "Access your Yumy account!",
};

const page = () => {
  return (
    <main className="min-h-screen flex justify-center items-center p-3">
      <article className="max-w-[30.5rem] flex-1 bg-foreground rounded-3xl space-y-7 shadow-lg px-7 py-6">
        <h3 className="text-primary font-bold text-3xl tracking-tight">Yumy</h3>

        <div className="max-w-[355px] mx-auto space-y-8">
          <div className="space-y-4">
            <h1 className="text-pretty text-center font-bold text-4xl tracking-tighter">
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
                  className="w-full flex items-center gap-5 border-[1px] border-border shadow px-5 py-3 rounded-2xl text-copy-light font-medium hover:scale-[1.02] active:scale-[0.98] transition-all ease-linear will-change-transform"
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
          </div>

          <p className="text-center text-copy-lighter text-sm">
            By continuing, you agree to Yumy’s Terms of Service and Privacy
            Policy
          </p>
        </div>
      </article>
    </main>
  );
};
export default page;
