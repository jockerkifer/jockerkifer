import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { CreateSindicanciasDto } from './dto/create-sindicancias.dto';
import { UpdateSindicanciasDto } from './dto/update-sindicancias.dto';
import { SindicanciasService } from './sindicancias.service';

@Controller('v1/sindicancia')
export class SindicanciasController {

    constructor(private readonly sindicanciasService: SindicanciasService){}

    @UseGuards(JwtAuthGuard)
    @Post()
    criarCadastro(@Body() createSindicanciasDto:CreateSindicanciasDto){
        return this.sindicanciasService.criarCadastro(createSindicanciasDto)
    }

    @UseGuards(JwtAuthGuard)
    @Get()
    buscaGeral(){
        return this.sindicanciasService.buscaGeral()
    }

    @UseGuards(JwtAuthGuard)
    @Get(':_id')
    buscaId(@Param('_id') _id:string){
        return this.sindicanciasService.buscaId(_id)
    }

    @UseGuards(JwtAuthGuard)
    @Patch(':_id')
    atualizar(@Param('_id') _id:string , @Body() updateSindicanciasDto:UpdateSindicanciasDto){
        return this.sindicanciasService.atualizar(_id, updateSindicanciasDto)
    }

    @UseGuards(JwtAuthGuard)
    @Delete(':_id')
    deletar(@Param('_id') _id:string)
    {
        return this.sindicanciasService.delete(_id)
    }
}