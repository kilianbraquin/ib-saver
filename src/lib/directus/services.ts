import { directus } from "@/lib/directus/client";

export const getHomePage = () => {
  return directus.singleton("IBS_HomePage").read();
};
