import { signOut } from "@/auth";
import BackButton from "./BackButton";

export const metadata = {
  title: "Sign out",
  description: "You are about to sign out!",
};

const page = () => {
  return (
    <main className="min-h-screen flex justify-center items-center p-3">
      <article className="max-w-[30.5rem] flex-1 bg-foreground rounded-3xl space-y-7 shadow-lg px-7 py-6">
        <h3 className="text-primary font-bold text-3xl tracking-tight">Yumy</h3>

        <div className="max-w-[355px] mx-auto space-y-8">
          <div className="space-y-4">
            <h1 className="text-pretty text-center font-bold text-4xl tracking-tighter">
              You are about to sign out!
            </h1>
          </div>

          <div className="flex gap-2">
            <BackButton />
            <form
              className="w-1/2"
              action={async () => {
                "use server";

                await signOut({redirectTo: "/"});
              }}
            >
              <button
                type="submit"
                className="w-full border-[1px] border-border text-error shadow px-5 py-3 rounded-2xl font-medium hover:scale-[1.02] active:scale-[0.98] transition-all ease-linear will-change-transform"
              >
                Sign out
              </button>
            </form>
          </div>
        </div>
      </article>
    </main>
  );
};
export default page;
