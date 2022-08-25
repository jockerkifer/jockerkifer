import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { CreateFuncionariosDto } from './dto/create-funcionarios.dto';
import { UpdateFuncionariosDto } from './dto/update-funcionarios.dto';
import { FuncionariosService } from './funcionarios.service';

@Controller('v1/funcionarios')
export class FuncionariosController {

    constructor(private readonly funcionariosService:FuncionariosService ){}

    @UseGuards(JwtAuthGuard)
    @Post()
    criarCadastro(@Body() createFuncionariosDto: CreateFuncionariosDto){
        return this.funcionariosService.criarCadastro(createFuncionariosDto)
    }

    @UseGuards(JwtAuthGuard)
    @Get()
    buscaGeral(){
        return this.funcionariosService.buscaGeral()
    }

    @UseGuards(JwtAuthGuard)
    @Get(':_id')
    buscaId(@Param('_id') _id:string){
        return this.funcionariosService.buscaId(_id)
    }

    @UseGuards(JwtAuthGuard)
    @Patch(':_id')
    atualizar(@Param('_id') _id:string, @Body() updateFuncionariosDto:UpdateFuncionariosDto){
        return this.funcionariosService.atualizar(_id,updateFuncionariosDto)
    }

    @UseGuards(JwtAuthGuard)
    @Delete(':_id')
    deletar(@Param('_id') _id:string){
        return this.funcionariosService.deletar(_id)
    }
}