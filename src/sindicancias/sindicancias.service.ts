import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { PresosService } from 'src/presos/presos.service';
import { Sindicancias } from './interface/sindicancias.interface';

@Injectable()
export class SindicanciasService {
    constructor(
        @InjectModel('Sindicancias') private readonly sindicanciasModel:Model<Sindicancias>,
        private readonly presosService:PresosService
         
        ){}

    async criarCadastro(createSindicanciasDto){
        try{
            const criar = await new this.sindicanciasModel(createSindicanciasDto)
            criar.save()
            return criar
        }
        catch(error){
            throw new BadRequestException(`Erro ao cadastrar sindicancia, tente novamente - ${error}`)
        }
    }

    async buscaGeral(){
        const buscar = this.sindicanciasModel.find({status:{$nin:'62fa79bed0c947734197dd84'}}).populate({path:'status',select:'nome -_id'  })
        return buscar
    }

    async buscaId(_id):Promise<Sindicancias>{
        const buscaId = await this.sindicanciasModel.findById(_id).populate('status')
        if(!buscaId){
            throw new BadRequestException(`Sindicancia não localizada`)
        } 
        return buscaId
    }

    async buscaMatricula(det_matricula:string){
        const buscaMatricula = await this.sindicanciasModel.findOne({det_matricula})
        if(!buscaMatricula){
            throw new BadRequestException(`${det_matricula} não encontrada`)
        }
        return buscaMatricula
    }

    async atualizar(_id, updatePresosDto){
        try {
            const buscaId =await this.sindicanciasModel.findById(_id)
            if(!buscaId){
                throw new BadRequestException(`Usuário não localizado`)
            } 
            const atualizar =  await this.sindicanciasModel.updateOne({_id},updatePresosDto)
            return atualizar
        }
        catch(error){
            return error
        }
    }

    async delete(_id){
        try{
            const buscaId = this.sindicanciasModel.findById(_id)
            if(!buscaId){
                throw new BadRequestException(`Usuario não localizado`)
            }
            const deletar = await this.sindicanciasModel.updateOne({_id}, {status:'62fa79bed0c947734197dd84'})
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