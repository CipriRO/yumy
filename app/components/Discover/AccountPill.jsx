import { auth } from "@/auth";
import SignOut from "@/auth/SignOut";
import Image from "next/image";

const AccountPill = async () => {
  const session = await auth();

  return (
    <>
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
    </>
  );
};

export default AccountPill;
