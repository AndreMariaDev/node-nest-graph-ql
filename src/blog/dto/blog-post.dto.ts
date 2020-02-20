import { ObjectType, Field, Int, ID } from 'type-graphql';

@ObjectType()
export class CommentsType {
    @Field()
    readonly title: String;
    @Field()
    readonly body: String;
    @Field()
    readonly date: Date;
};
  
@ObjectType()
export class  MetaType {
    @Field()
    readonly votes : Number;
    @Field()
    readonly favs  : Number;
};
  
@ObjectType()
export class BlogPostType {
    @Field(() => ID)
    id: string;
    @Field()
    readonly author    : String;
    @Field()
    readonly title     : String;
    @Field()
    readonly body      : String;
    @Field()
    readonly date      : Date;
    @Field(type=>[CommentsType])
    readonly comments  : [CommentsType];
    @Field(type=>MetaType)
    readonly meta      : MetaType;
}