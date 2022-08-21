import "dotenv/config";
import path from "path";
import { DataSource } from "typeorm";

const projectPath: string = path
  .resolve(__dirname)
  .replace("resources", "main");

export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  synchronize: true,
  logging: true,
  logger: "file",
  entities: [`${projectPath}/**/model/*.ts`],
  subscribers: [],
  migrations: [],
});
