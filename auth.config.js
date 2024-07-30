import Google from "next-auth/providers/google";
import Facebook from "next-auth/providers/facebook";

const providers = [Google, Facebook];

export const providerMap = providers.map((provider) => {
  if (typeof provider === "function") {
    const providerData = provider();
    return { id: providerData.id, name: providerData.name };
  } else {
    return { id: provider.id, name: provider.name };
  }
});

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  providers,
};
