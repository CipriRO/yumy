import Link from "next/link";

const LoginBtn = ({ pathname, className }) => {
  return (
    <Link
      href="/auth/signin"
      role="button"
      type="submit"
      className={`${className} rounded-full py-2 px-6 shadow-lg bg-primary text-slate-50 font-medium hover:bg-primary-dark transition-colors ${
        pathname === "/login" ? "!bg-primary-dark" : undefined
      }`}
    >
      Sign In
    </Link>
  );
};

export default LoginBtn;
