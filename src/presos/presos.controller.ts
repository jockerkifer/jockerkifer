import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { CreatePresosDto } from './dtos/create-presos.dto';
import { UpdatePresosDto } from './dtos/update-presos.dto';
import { PresosService } from './presos.service';

@Controller('v1/presos')
export class PresosController {

    constructor(private readonly presosService: PresosService){}

    @UseGuards(JwtAuthGuard)
    @Post()
    criarCadastro(@Body() createPresosDto: CreatePresosDto){
        return this.presosService.criarCadastro(createPresosDto)
    }

    @UseGuards(JwtAuthGuard)
    @Get()
    buscaGeral(){
        return this.presosService.buscaGeral()
    }

    @UseGuards(JwtAuthGuard)
    @Get(':_id')
    buscaId(@Param('_id') _id:string){
        return this.presosService.buscaId(_id)
    }

    @UseGuards(JwtAuthGuard)
    @Patch(':_id')
    atualizar(@Param('_id') _id:string , @Body() updatePresosDto:UpdatePresosDto){
        return this.presosService.atualizar(_id, updatePresosDto)
    }

    @UseGuards(JwtAuthGuard)
    @Delete(':_id')
    deletar(@Param('_id') _id:string)
    {
        return this.presosService.delete(_id)
    }
}