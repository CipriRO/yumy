"use server";

const { signOut } = require("@/auth");


const SignOut = async () => {
  await signOut();
};

export default SignOut;
