import { Controller, Get, Query } from '@nestjs/common';
import { PostService } from './post.service';
import { POST } from './interface/post.interface';

@Controller('post')
export class PostController {
    constructor(private postService:PostService){}

    @Get()
    findAll(){
        return this.postService.findAll()
    }

    @Get()
  findAllwithQuery(@Query('search') search?: string): POST[] {
    const extractAllPost = this.postService.findAll();
    if (search) {
      return extractAllPost.filter(
        (post) =>
          post.title.toLowerCase().includes(search.toLowerCase()) ||
          post.authorName.toLowerCase().includes(search.toLowerCase()),
      );
    }
    return extractAllPost;
  }
}

