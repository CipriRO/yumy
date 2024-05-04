import NextAuth from "next-auth";
import authConfig from "./auth.config";
import { DEFAULT_LOGIN, DEFAULT_LOGIN_REDIRECT, apiPrefix, authRoutes, publicRoutes } from "./routes";
const { auth } = NextAuth(authConfig);

export default auth((req) => {
  const { nextUrl } = req;
  const isLoggedIn = !!req.auth;

  const isApiRoute = nextUrl.pathname.startsWith(apiPrefix);
  const isAuthRoute = authRoutes.includes(nextUrl.pathname);
  const isPublicRoute = publicRoutes.includes(nextUrl.pathname);

  if (isApiRoute)
    return null;
  if (isAuthRoute)
  {
    if (isLoggedIn)
      return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl));
    return null;
  }

  if (!isPublicRoute && !isLoggedIn)
    return Response.redirect(new URL(DEFAULT_LOGIN, nextUrl));
  return null;
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
