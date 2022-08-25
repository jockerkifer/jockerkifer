import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { CreateUsuariosDto } from './dto/create-usuarios.dto';
import { UpdateUsuariosDto } from './dto/update-usuarios.dto';
import { UsuariosService } from './usuarios.service';

@Controller('v1/usuarios')
export class UsuariosController {
    constructor(private readonly usuariosService: UsuariosService){}

    @UseGuards(JwtAuthGuard)
    @Post()
    criarCadastro(@Body() createUsuariosDto: CreateUsuariosDto){
        return this.usuariosService.criarCadastro(createUsuariosDto)
    }

    @UseGuards(JwtAuthGuard)
    @Get()
    buscaGeral(){
        return this.usuariosService.buscaGeral()
    }

    @UseGuards(JwtAuthGuard)
    @Get(':_id')
    buscaId(@Param('_id') _id:string){
        return this.usuariosService.buscaId(_id)
    }

    @UseGuards(JwtAuthGuard)
    @Patch(':_id')
    atualizar(@Param('_id') _id:string, @Body() updateUsuariosDto:UpdateUsuariosDto){
        return this.usuariosService.atualizar(_id,updateUsuariosDto)
    }


    @UseGuards(JwtAuthGuard)
    @Delete(':_id')
    deletar(@Param('_id') _id:string){
        return this.usuariosService.deletar(_id)
    }

}