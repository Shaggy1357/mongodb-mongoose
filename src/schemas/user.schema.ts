import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type UserDocument = user & Document;

@Schema()
export class user{
    @Prop()
    firstname:string;

    @Prop()
    lastname:string;

    @Prop()
    age:number;

}

export const UserSchema = SchemaFactory.createForClass(user);