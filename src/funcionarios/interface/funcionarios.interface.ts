import { Document } from "mongoose";

export interface Funcionarios extends Document{
    nome_servidor:String;
    nome_mae:String;
    rg:String;
    cpf:String;
    rs:Number;
    status:String;
    cns:String;
    data_nascimento:Date;
    idade:Number;
    genero:String;
    municipio_residencia:String;
    logradouro:String;
    numero:Number;
    bairro:String;
    telefone:String;
    email:String;
    cargo_servidor:String;
    grupo:String,
    createdAt:Date;
    updatedAt:Date;
}