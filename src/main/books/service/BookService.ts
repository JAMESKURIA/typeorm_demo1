import { Book } from "../model/Book";

export interface BookService {
  getAllBooks(): Promise<Book[]>;

  getBookById(id: number): Promise<Book>;
}
