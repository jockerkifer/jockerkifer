import { Document } from "mongoose";

export interface Grupos extends Document{
    nome:string;
    status:string;
    createdAt: Date;
    updatedAt: Date;
}