export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      DB_PORT: string;
      DB_HOST: string;
      DB_USER: string;
      DB_PASS: string;
      DB_NAME: string;
    }
  }
}
