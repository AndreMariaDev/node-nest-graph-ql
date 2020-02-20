import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { BlogPostService } from './blog-post.service';
import { BlogPostType } from './dto/blog-post.dto';
import { BlogPostInput } from './inputs/blog-post.input';

@Resolver()
export class BlogPostResolver {
  constructor(private readonly blogPostService: BlogPostService) {}

  @Query(() => String)
  async hello() {
    return 'hello';
  }

  @Query(() => [BlogPostType])
  async blog() {
    return this.blogPostService.findAll();
  }

  @Mutation(() => BlogPostType)
  async createBlogPost(@Args('input') input: BlogPostInput) {
    return this.blogPostService.create(input);
  }
}