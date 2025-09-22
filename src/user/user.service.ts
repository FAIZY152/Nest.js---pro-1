import { Injectable, Put } from '@nestjs/common';

@Injectable()
export class UserService {
    userData = [
        { id: 1, name: 'John Doe' },
        { id: 2, name: 'Jane Smith' },
        { id: 3, name: 'Bob Johnson' }
    ]
    constructor() {}

    getUser() {
        return { id: 1, name: 'John Doe' };
    }

    getUserById( id: number ) {
        return { id: 1, name: 'John Doe' };
    }
}
