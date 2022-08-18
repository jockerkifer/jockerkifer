import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { CreateFuncionariosDto } from './dto/create-funcionarios.dto';
import { UpdateFuncionariosDto } from './dto/update-funcionarios.dto';
import { FuncionariosService } from './funcionarios.service';

@Controller('v1/funcionarios')
export class FuncionariosController {

    constructor(private readonly funcionariosService:FuncionariosService ){}


    @Post()
    criarCadastro(@Body() createFuncionariosDto: CreateFuncionariosDto){
        return this.funcionariosService.criarCadastro(createFuncionariosDto)
    }

    @Get()
    buscaGeral(){
        return this.funcionariosService.buscaGeral()
    }

    @Get(':_id')
    buscaId(@Param('_id') _id:string){
        return this.funcionariosService.buscaId(_id)
    }

    @Patch(':_id')
    atualizar(@Param('_id') _id:string, @Body() updateFuncionariosDto:UpdateFuncionariosDto){
        return this.funcionariosService.atualizar(_id,updateFuncionariosDto)
    }

    @Delete(':_id')
    deletar(@Param('_id') _id:string){
        return this.funcionariosService.deletar(_id)
    }
}