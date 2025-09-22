import { Injectable, Put } from '@nestjs/common';

@Injectable()
export class UserService {
    constructor() {}

    getUser() {
        return { id: 1, name: 'John Doe' };
    }

    @Put("/users/:id")
    updateUser( id: number ) {
        return { id: 1, name: 'John Doe' };
    }
}
