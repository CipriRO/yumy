import SignIn from "./SignIn";

const LoginBtn = ({ pathname, className }) => {
  return (
    <form
      action={async() => await SignIn()}
    >
      <button
        //href="/login"
        //role="button"
        type="submit"
        className={`${className} rounded-full py-2 px-6 shadow-lg bg-primary text-slate-50 font-medium hover:bg-primary-dark transition-colors ${
          pathname === "/login" ? "!bg-primary-dark" : undefined
        }`}
      >
        Log In
      </button>
    </form>
  );
};

export default LoginBtn;