/*
https://docs.nestjs.com/providers#services
*/

import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Sindicancias } from './interface/sindicancias.interface';

@Injectable()
export class SindicanciasService {
    constructor(
        @InjectModel('Sindicancias') private readonly sindicanciasModel:Model<Sindicancias>,
        private readonly 
        ){}

    async criarCadastro(createSindicanciasDto){
        try{
            const {matricula} = createSindicanciasDto
            const buscar = await this.sindicanciasModel.findOne({matricula})
            if(!buscar){
                throw new BadRequestException(`${matricula} não localizada!!`)
            }
            const criar = await new this.sindicanciasModel(createSindicanciasDto)
            criar.save()
            return criar
        }
        catch(error){
            throw new BadRequestException(`Erro ao cadastrar sindicancia, tente novamente - ${error}`)
        }
    }
}
