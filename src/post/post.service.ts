import { Injectable } from '@nestjs/common';
import { POST } from './interface/post.interface';

@Injectable()
export class PostService {
    private posts:POST = [
        {
            id: 1,
            title: 'title 1',
            content: 'content 1',
            authorName: 'author 1',
            createdAt: new Date(),
            updatedAt: new Date()
        }, {
            id: 2,
            title: 'title 2',
            content: 'content 2',
            authorName: 'author 2',
            createdAt: new Date(),
            updatedAt: new Date()
        }, {
            id: 3,
            title: 'title 3',
            content: 'content 3',
            authorName: 'author 3',
            createdAt: new Date(),
            updatedAt: new Date()
        }
    ]

    findAll(): POST[] {
        return this.posts
    }
}
