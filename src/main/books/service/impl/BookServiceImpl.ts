import { Service } from "typedi";
import { Book } from "../../model/Book";
import { bookRepository } from "../../repository/BookRepository";
import { BookService } from "./../BookService";

@Service()
export class BookServiceImpl implements BookService {
  protected readonly bookRepository = bookRepository;

  async getAllBooks(): Promise<Book[]> {
    return await this.bookRepository.find();
  }
  async getBookById(id: number): Promise<Book | any> {
    return this.bookRepository.findBy({ id });
  }
}
