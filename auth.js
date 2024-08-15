import NextAuth from "next-auth";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import clientPromise from "./app/lib/mongodb/mongodb_clientPromise";
import authConfig from "./auth.config";
import { updateUserById, uploadImageToImgurByUrl } from "./app/lib/uploadData";

export const { handlers, signIn, signOut, auth } = NextAuth({
  ...authConfig,
  adapter: MongoDBAdapter(clientPromise),
  session: { strategy: "jwt" },
  callbacks: {
    async jwt({ token, user, trigger, session }) {
      if (trigger === "update" && session?.name) token.name = session.name;

      if (trigger === "signUp" && user) {
        const newPicture = await uploadImageToImgurByUrl(user.image);
        await updateUserById(user.id, { image: newPicture });
        token.picture = newPicture;
      }

      if (user) {
        token.id = user.id;
      }
      return token;
    },
    session({ session, token }) {
      session.user.id = token.id;
      return session;
    },
  },
  pages: {
    signIn: "/auth/signin",
    error: "/error"
  },
  //debug: true,
});
