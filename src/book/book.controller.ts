import { Controller } from '@nestjs/common';
import { BookService } from './book.service';
import { ConfigService } from '@nestjs/config';

@Controller('book')
export class BookController {
    constructor (private readonly bookService: BookService , private  configService:ConfigService) {}

    getBooks() {
        return this.bookService.getBooks();
    }
}
