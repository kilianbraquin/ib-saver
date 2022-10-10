import { DirectusCollection } from "@/lib/directus/types";
import { Directus } from "@directus/sdk";

export const directus = new Directus<DirectusCollection>(
  process.env.NEXT_PUBLIC_DIRECTUS_CMS_URL
);
