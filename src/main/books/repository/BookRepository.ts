import { Repository } from "typeorm";
import { AppDataSource } from "../../../resources/data-source";
import { Book } from "./../model/Book";

export const bookRepository: Repository<Book> =
  AppDataSource.getRepository(Book);
