declare namespace NodeJS {
  interface ProcessEnv {
    NEXT_PUBLIC_WORKER_URL: string;
  }
}

declare module "*.svg" {
  const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  export default content;
}
