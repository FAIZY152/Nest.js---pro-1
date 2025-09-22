import { Controller, Get, Param } from '@nestjs/common';
import { UserService } from 'src/user-service/user-service.service';

@Controller('user')
export class UserController {
 constructor(
    private readonly userService: UserService
 ) {}

 @Get()
 getAllProducts() {
    return this.userService.getAllProducts();
 }
//  get by id 
  @Get(':id')
  GetProductById(@Param('id') id: string) {
    return this.userService.GetProductById(
      Number(id)
    );
  }
}
