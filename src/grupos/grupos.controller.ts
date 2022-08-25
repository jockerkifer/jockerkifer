import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { CreateGruposDto } from './dto/create-grupos.dto';
import { UpdateGruposDto } from './dto/update-grupos.dto';
import { GruposService } from './grupos.service';

@Controller('v1/grupos')
export class GruposController {

    constructor(private readonly gruposService:GruposService){}

    @UseGuards(JwtAuthGuard)
    @Post()
    criarCadastro(@Body() createGruposDto: CreateGruposDto){
        return this.gruposService.criarCadastro(createGruposDto)
    }

    @UseGuards(JwtAuthGuard)
    @Get()
    buscaGeral(){
        return this.gruposService.buscaGeral()
    }

    @UseGuards(JwtAuthGuard)
    @Get(':_id')
    buscaId(@Param('_id') _id:string){
        return this.gruposService.buscaId(_id)
    }

    @UseGuards(JwtAuthGuard)
    @Patch(':_id')
    atualizar(@Param('_id') _id:string, @Body() updateGruposDto:UpdateGruposDto){
        return this.gruposService.atualizar(_id,updateGruposDto)
    }

    @UseGuards(JwtAuthGuard)
    @Delete(':_id')
    deletar(@Param('_id') _id:string){
        return this.gruposService.deletar(_id)
    }


 }
