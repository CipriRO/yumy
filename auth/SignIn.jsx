"use server";

const { signIn } = require("@/auth");


const SignIn = async (id) => {
  await signIn(id, { redirectTo: "/discover" });
};

export default SignIn;
