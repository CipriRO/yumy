import Google from "next-auth/providers/google";

const providers = [Google];

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
