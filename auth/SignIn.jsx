"use server";

const { signIn } = require("@/auth");


const SignIn = async () => {
  await signIn();
};

export default SignIn;
