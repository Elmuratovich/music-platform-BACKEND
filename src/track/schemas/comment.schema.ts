import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import * as mongoose from 'mongoose';
import { Track } from './track.schema';

export type CommentDocument = Comment & Document;

@Schema()
export class Comment {
  @Prop()
  username: string;

  @Prop()
  text: string;

  @Prop({type: mongoose.Schema.Types.ObjectId, ref: 'Track'})
  track: Track;
}

export const CommentSchema = SchemaFactory.createForClass(Comment);
