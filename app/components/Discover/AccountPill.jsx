import { auth } from "@/auth";
import Image from "next/image";

const AccountPill = async () => {
  const session = await auth();

  return (
    <div className="flex max-w-56 items-center justify-center gap-2 rounded-full px-1 py-1 transition-all ease-linear md:bg-foreground md:px-4 md:shadow-sm">
      <p className="hidden text-center font-medium md:line-clamp-1">
        {session?.user?.name}
      </p>
      <Image
        src={session?.user?.image}
        alt={`Profile picture of ${session?.user?.name}`}
        width={30}
        height={30}
        className="rounded-full"
      />
    </div>
  );
};

export default AccountPill;
