import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { BlogPost } from './interfaces/blog-post.interface';
import { BlogPostInput } from './inputs/blog-post.input';

@Injectable()
export class BlogPostService {
  constructor(@InjectModel('Blog') private readonly blogPostModel: Model<BlogPost>) {}

  async create(blogPostDto: BlogPostInput): Promise<BlogPost> {
    const createdCat = new this.blogPostModel(blogPostDto);
    return await createdCat.save();
  }

  async findAll(): Promise<BlogPost[]> {
    return await this.blogPostModel.find().exec();
  }
}