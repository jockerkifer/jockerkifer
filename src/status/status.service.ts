import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Presos } from 'src/presos/interfaces/presos.interface';

@Injectable()
export class StatusService {

constructor(@InjectModel('Status') private readonly statusModel:Model<Presos>){}

    async criarCadastro(createStatusDto){
        try{
            const criar  = new this.statusModel(createStatusDto)
            criar.save()
            return criar
        }
        catch(error){
            throw new BadRequestException(`Não foi possível criar status ${error}`)
        }
    }

    async listaGeral(){
        const buscaGeral = await this.statusModel.find()
        return buscaGeral
    }

    async buscaId(_id){
        const buscaId = await this.statusModel.findById(_id)
        if(!buscaId){
            throw new BadRequestException(`Status não localizado`)
        }
        return buscaId
    }

    async atualizar(_id, updateStatusDto){

        try{
            const buscaId = await this.statusModel.findById(_id)
            if(!buscaId){
                throw new BadRequestException(`Status não localizado`)
            }
            const atualizar = await this.statusModel.updateOne({_id},updateStatusDto)
            return atualizar
        }
        catch(error){
            throw new BadRequestException(error)
        }
    }
}