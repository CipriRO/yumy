import { auth } from "@/auth";
import Pill from "./Pill";

const AccountPill = async () => {
  const session = await auth();

  return (
    <Pill content={session?.user?.name} image={session?.user?.image}>
      AccountPill
    </Pill>
  );
};
export default AccountPill;
