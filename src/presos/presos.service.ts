import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Presos } from './interfaces/presos.interface';

@Injectable()
export class PresosService {

  constructor(@InjectModel('Presos') private readonly PresosModel:Model<Presos>){}

  async criarCadastro(createPresosDto){
        try{
            const criar = await new this.PresosModel(createPresosDto)
            criar.save()
            return criar
        }
        catch(error){
            throw new BadRequestException(`Erro ao cadastrar usuário, tente novamente - ${error}`)
        }
    }

    async buscaGeral(){
        const buscar = this.PresosModel.find({status:{$nin:'62fa79bed0c947734197dd84'}}).populate({path:'status',select:'nome -_id'  })
        return buscar
    }

    async buscaId(_id):Promise<Presos>{
        const buscaId = await this.PresosModel.findById(_id).populate('status')
        if(!buscaId){
            throw new BadRequestException(`Usuário não localizado`)
        } 
        return buscaId
    }

    async atualizar(_id, updatePresosDto){
        try {
            const buscaId =await this.PresosModel.findById(_id)
            if(!buscaId){
                throw new BadRequestException(`Usuário não localizado`)
            } 
            const atualizar =  await this.PresosModel.updateOne({_id},updatePresosDto)
            return atualizar
        }
        catch(error){
            return error
        }
    }

    async delete(_id){
        try{
            const buscaId = this.PresosModel.findById(_id)
            if(!buscaId){
                throw new BadRequestException(`Usuario não localizado`)
            }
            const deletar = await this.PresosModel.updateOne({_id}, {status:'62fa79bed0c947734197dd84'})
            if(!deletar){
                throw new BadRequestException('Não foi possível deletar, tente novamente!!!')
            }
            return deletar
        }
        catch(error){
            throw new BadRequestException(error)
        }
    }
}