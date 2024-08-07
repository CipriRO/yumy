import { signOut } from "@/auth";
import BackButton from "./BackButton";

export const metadata = {
  title: "Sign out",
  description: "You are about to sign out!",
};

const page = () => {
  return (
    <main className="flex min-h-screen items-center justify-center p-3">
      <article className="max-w-[30.5rem] flex-1 space-y-7 rounded-3xl bg-foreground px-7 py-6 shadow-lg">
        <h2 className="text-3xl font-bold text-primary">Yumy</h2>

        <div className="mx-auto max-w-[355px] space-y-8">
          <div className="space-y-4">
            <h1 className="text-pretty text-center text-4xl font-bold tracking-tighter">
              You are about to sign out!
            </h1>
          </div>

          <div className="flex gap-2">
            <BackButton />
            <form
              className="w-1/2"
              action={async () => {
                "use server";

                await signOut({ redirectTo: "/" });
              }}
            >
              <button
                type="submit"
                className="w-full rounded-2xl border-[1px] border-border px-5 py-3 font-medium text-error shadow transition-all ease-linear will-change-transform hover:scale-[1.02] active:scale-[0.98]"
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
