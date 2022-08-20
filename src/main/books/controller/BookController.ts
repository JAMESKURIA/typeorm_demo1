import { Get, JsonController, Param } from "routing-controllers";
import { Inject, Service } from "typedi";
import { BookServiceImpl } from "./../service/impl/BookServiceImpl";

@JsonController("/books")
@Service()
export class BookController {
  @Inject()
  bookService!: BookServiceImpl;

  @Get()
  getBooks() {
    return this.bookService.getAllBooks();
  }

  @Get("/:id")
  getBook(@Param("id") id: number) {
    return this.bookService.getBookById(id);
  }
}
