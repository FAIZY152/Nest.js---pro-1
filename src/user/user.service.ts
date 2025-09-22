import { Injectable, Put } from '@nestjs/common';

@Injectable()
export class UserService {
    userData = [
        { id: 1, name: 'John Doe' },
        { id: 2, name: 'Jane Smith' },
        { id: 3, name: 'Bob Johnson' },
        {id:4,name:'Ravi Kumar'},
    ]
    constructor() {}

    getUser() {
        return this.userData;
    }

    getUserById( id: number ) {
        return this.userData.find(user => user.id === id);
    }
    
    // get with query
    // user/?name=John
    getUserByIdwithQuery( name: string ) {
        return this.userData.find(user => user.name === name);
    }

    // 

}
