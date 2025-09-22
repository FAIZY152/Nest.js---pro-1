import { Controller, Get } from '@nestjs/common';
import { BookService } from './book.service';
import { ConfigService } from '@nestjs/config';

@Controller('book')
export class BookController {
    constructor (private readonly bookService: BookService , private  configService:ConfigService) {}

    @Get()
    getAppName() {
        const APP_NAME = this.configService.get<string>('APP_NAME');
        return `App name ${APP_NAME}`;
    }
}
