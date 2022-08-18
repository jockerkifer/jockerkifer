import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Usuarios } from './interface/usuarios.interface';

@Injectable()
export class UsuariosService {
    constructor(@InjectModel('Usuarios') private readonly usuariosModel:Model<Usuarios>){}

    async criarCadastro(createUsuariosDto){
        try{
            const criar = await new this.usuariosModel(createUsuariosDto)
            criar.save()
            return criar
        }
        catch(error){
            throw new BadRequestException (`Erro ${error} ao cadastrar Usuario, tente novamente!!!`)
        }
    }

    async buscaGeral(){
        const buscaGeral = await this.usuariosModel.find({status:{$nin:'62fa79c9d0c947734197dd86'}}).populate('status').populate('grupo')
        return buscaGeral
    }

    async buscaId(_id){
        const buscaId = await this.usuariosModel.findById(_id).populate('status').populate('grupo')
        if(!buscaId){
            throw new BadRequestException(`Usuario não localizado`)
        }
        return buscaId
    }

    async buscaEmail(email:string){
        const buscaEmail = await this.usuariosModel.findOne({email}).exec
        if(!buscaEmail){
            throw new BadRequestException(`${email} não encontrado`)
        }
        return buscaEmail
    }

    async atualizar(_id,updateUsuariosDto){
        try {
            const buscaId = await this.usuariosModel.findById(_id)
            if(!buscaId){
                throw new BadRequestException(`Usuario não localizado`)
            }
            const atualizar =  await this.usuariosModel.updateOne({_id},updateUsuariosDto)
            return atualizar
        }
        catch(error){
            return error
        }
    }

    async deletar(_id){
        try {
            const buscaId = await this.usuariosModel.findById(_id)
            if(!buscaId){
                throw new BadRequestException(`Usuario não localizado`)
            }
            const deletar =  await this.usuariosModel.updateOne({_id},{status: '62fa79c9d0c947734197dd86'})
            return deletar
        }
        catch(error){
            return error
        }

    }
 }
