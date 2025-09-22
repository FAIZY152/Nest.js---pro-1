import { Controller, Get, Param, Query } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Get()
    getUser() {
        return this.userService.getUser();
    }

    @Get(':id')
    getUserById( @Param('id') id: number ) {
        return this.userService.getUserById(Number(id));
    }

    // /user/query?name=John
    @Get('query')
    getUserByIdwithQuery( @Query('name') name: string ) {
        return this.userService.getUserByIdwithQuery(name);
    }

}
