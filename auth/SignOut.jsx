"use server";

const { signOut } = require("@/auth");


const SignOut = async () => {
  await signOut({ redirectTo: "/" });
};

export default SignOut;
