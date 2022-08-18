import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { CreateGruposDto } from './dto/create-grupos.dto';
import { UpdateGruposDto } from './dto/update-grupos.dto';
import { GruposService } from './grupos.service';

@Controller('v1/grupos')
export class GruposController {

    constructor(private readonly gruposService:GruposService){}

    @Post()
    criarCadastro(@Body() createGruposDto: CreateGruposDto){
        return this.gruposService.criarCadastro(createGruposDto)
    }

    @Get()
    buscaGeral(){
        return this.gruposService.buscaGeral()
    }

    @Get(':_id')
    buscaId(@Param('_id') _id:string){
        return this.gruposService.buscaId(_id)
    }

    @Patch(':_id')
    atualizar(@Param('_id') _id:string, @Body() updateGruposDto:UpdateGruposDto){
        return this.gruposService.atualizar(_id,updateGruposDto)
    }

    @Delete(':_id')
    deletar(@Param('_id') _id:string){
        return this.gruposService.deletar(_id)
    }


 }
