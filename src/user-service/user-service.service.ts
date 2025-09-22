import { Get, Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
 private userData = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Smith' },
    { id: 3, name: 'Bob Johnson' }
 ]

 constructor() {
    console.log('UserService initialized');
 }

 getAllProducts() {
    return this.userData;
 }

 GetProductById(id: number) {
    return this.userData.find(product => product.id === id);
 }
}
