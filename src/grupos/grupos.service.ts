import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Grupos } from './interface/grupos.interface';

@Injectable()
export class GruposService {

    constructor(@InjectModel('Grupos') private readonly gruposModel:Model<Grupos>){}

    async criarCadastro(createGruposDto){
        try{
            const criar = await new this.gruposModel(createGruposDto)
            criar.save()
            return criar
        }
        catch(error){
            throw new BadRequestException (`Erro ${error} ao cadastrar Grupo, tente novamente!!!`)
        }
    }

    async buscaGeral(){
        const buscaGeral = await this.gruposModel.find({status:{$nin:'62fa79c9d0c947734197dd86'}}).populate('status')
        return buscaGeral
    }

    async buscaId(_id){
        const buscaId = await this.gruposModel.findById(_id).populate('status')
        if(!buscaId){
            throw new BadRequestException(`Grupo não localizado`)
        }
        return buscaId
    }

    async atualizar(_id,updateGruposDto){
        try {
            const buscaId = await this.gruposModel.findById(_id).populate('status')
            if(!buscaId){
                throw new BadRequestException(`Grupo não localizado`)
            }
            const atualizar =  await this.gruposModel.updateOne({_id},updateGruposDto)
            return atualizar
        }
        catch(error){
            return error
        }
    }

    async deletar(_id){
        try {
            const buscaId = await this.gruposModel.findById(_id).populate('status')
            if(!buscaId){
                throw new BadRequestException(`Grupo não localizado`)
            }
            const deletar =  await this.gruposModel.updateOne({_id},{status: '62fa79c9d0c947734197dd86'})
            return deletar
        }
        catch(error){
            return error
        }

    }
}