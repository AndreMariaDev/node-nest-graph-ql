import { InputType, Field, Int } from 'type-graphql';
import { type } from 'os';

@InputType()
export class CommentsInput {
    @Field()
    readonly title: String;
    @Field()
    readonly body: String;
    @Field()
    readonly date: Date;
};
  
@InputType()
export class  MetaInput {
    @Field()
    readonly votes : Number;
    @Field()
    readonly favs  : Number;
};
  
@InputType()
export class BlogPostInput {
    @Field()
    readonly author    : String;
    @Field()
    readonly title     : String;
    @Field()
    readonly body      : String;
    @Field()
    readonly date      : Date;
    @Field(type=>[CommentsInput])
    readonly comments  : [CommentsInput];
    @Field(type=>MetaInput)
    readonly meta      : MetaInput;
}

