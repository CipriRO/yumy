import { auth } from "@/auth";
import Image from "next/image";

const AccountPill = async () => {
  const session = await auth();

  return (
    <div className="flex justify-center items-center gap-2 py-1 px-1 md:px-4 md:bg-foreground rounded-full ease-linear transition-all md:shadow-sm max-w-56">
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
