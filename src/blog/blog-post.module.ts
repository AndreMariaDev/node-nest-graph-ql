import { Module } from '@nestjs/common';
import { BlogPostResolver } from './blog-post.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { BlogPostSchema } from './blog-post.schema';
import { BlogPostService } from './blog-post.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Blog', schema: BlogPostSchema }])],
  providers: [BlogPostResolver, BlogPostService],
})
export class BlogPostModule {}