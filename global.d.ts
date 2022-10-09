declare namespace NodeJS {
  interface ProcessEnv {
    NEXT_PUBLIC_FATHOM_SCRIPT_URL: string;
    NEXT_PUBLIC_FATHOM_SITE_ID: string;
    NEXT_PUBLIC_DOMAIN_NAME: string;
  }
}

declare module "*.svg" {
  const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  export default content;
}
