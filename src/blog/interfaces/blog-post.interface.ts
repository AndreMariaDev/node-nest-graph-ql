import { Document } from 'mongoose';

export interface Cat extends Document {
  readonly name: string;
  readonly age: number;
  readonly breed: string;
}

export interface Comments extends Document {
    readonly title: String;
    readonly body: String;
    readonly date: Date;
};
  
export interface  Meta extends Document {
    readonly votes : Number;
    readonly favs  : Number;
};
  
export interface BlogPost  extends Document {
    readonly author    : String;
    readonly title     : String;
    readonly body      : String;
    readonly date      : Date;
    readonly comments  : [Comments];
    readonly meta      : Meta;
  };