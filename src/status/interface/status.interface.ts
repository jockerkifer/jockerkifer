import { Document } from "mongoose";

export interface Status extends Document{
    nome: String;
    createdAt:Date;
    updatedAt:Date;
}
    