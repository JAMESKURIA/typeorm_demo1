import "dotenv/config";
import { DataSource } from "typeorm";
import { Book } from "../main/books/model/Book";
import { User } from "../main/user/model/User";

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
  entities: [User, Book],
  subscribers: [],
  migrations: [],
});
