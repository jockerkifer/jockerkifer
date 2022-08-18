import { Document } from "mongoose";

export interface Usuarios extends Document{
    nome:String;
    email:String
    password:string;
    grupo:String;
    status:string;
    createdAt:Date;
    updatedAt:Date;
}