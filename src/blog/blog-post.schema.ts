import * as mongoose from 'mongoose';

export const CommentsSchema = new mongoose.Schema({
    title     : String
  , body      : String
  , date      : Date
});
  
export const  MetaSchema = new mongoose.Schema({
  votes : Number
  , favs  : Number
});
  
export const BlogPostSchema = new mongoose.Schema({
    author    : String
  , title     : String
  , body      : String
  , date      : Date
  , comments  : [CommentsSchema]
  , meta      : MetaSchema
  });