import { Injectable } from '@nestjs/common';

@Injectable()
export class BookService {
    books = [
        {id: 1, name: 'book1'},
        {id: 2, name: 'book2'},
        {id: 3, name: 'book3'},
    ]
    getBooks() {
        return this.books.map((it ,indx) => ({id:it.id , name:it.name}));
    }
    getBookById(id: number) {
        return this.books.find(it => it.id === id);
    }
    getBookByName(name: string) {
        return this.books.find(it => it.name === name);
    }

}
