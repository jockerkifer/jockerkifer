import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Funcionarios } from './interface/funcionarios.interface';

@Injectable()
export class FuncionariosService {

    constructor(@InjectModel('Funcionarios') private readonly funcionariosModel:Model<Funcionarios>){}

    async criarCadastro(createFuncionariosDto){
        try{
            const criar = await new this.funcionariosModel(createFuncionariosDto)
            criar.save()
            return criar
        }
        catch(error){
            throw new BadRequestException (`Erro ${error} ao cadastrar Funcionarios, tente novamente!!!`)
        }
    }

    async buscaGeral(){
        const buscaGeral = await this.funcionariosModel.find({status:{$nin:'62fa79c9d0c947734197dd86'}}).populate('status')
        return buscaGeral
    }

    async buscaId(_id){
        const buscaId = await this.funcionariosModel.findById(_id).populate('status')
        if(!buscaId){
            throw new BadRequestException(`Funcionarios não localizado`)
        }
        return buscaId
    }

    async buscaEmail(email:string){
        const buscaEmail = await this.funcionariosModel.findOne({email}).exec
        if(!buscaEmail){
            throw new BadRequestException(`${email} não encontrado`)
        }
        return buscaEmail
    }

    async atualizar(_id,updateFuncionariosDto){
        try {
            const buscaId = await this.funcionariosModel.findById(_id)
            if(!buscaId){
                throw new BadRequestException(`Funcionarios não localizado`)
            }
            const atualizar =  await this.funcionariosModel.updateOne({_id},updateFuncionariosDto)
            return atualizar
        }
        catch(error){
            return error
        }
    }

    async deletar(_id){
        try {
            const buscaId = await this.funcionariosModel.findById(_id)
            if(!buscaId){
                throw new BadRequestException(`Funcionarios não localizado`)
            }
            const deletar =  await this.funcionariosModel.updateOne({_id},{status: '62fa79c9d0c947734197dd86'})
            return deletar
        }
        catch(error){
            return error
        }

    }
 }