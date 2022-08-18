import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { CreateUsuariosDto } from './dto/create-usuarios.dto';
import { UpdateUsuariosDto } from './dto/update-usuarios.dto';
import { UsuariosService } from './usuarios.service';

@Controller('v1/usuarios')
export class UsuariosController {
    constructor(private readonly usuariosService: UsuariosService){}

    @Post()
    criarCadastro(@Body() createUsuariosDto: CreateUsuariosDto){
        return this.usuariosService.criarCadastro(createUsuariosDto)
    }

    @Get()
    buscaGeral(){
        return this.usuariosService.buscaGeral()
    }

    @Get(':_id')
    buscaId(@Param('_id') _id:string){
        return this.usuariosService.buscaId(_id)
    }

    @Patch(':_id')
    atualizar(@Param('_id') _id:string, @Body() updateUsuariosDto:UpdateUsuariosDto){
        return this.usuariosService.atualizar(_id,updateUsuariosDto)
    }

    @Delete(':_id')
    deletar(@Param('_id') _id:string){
        return this.usuariosService.deletar(_id)
    }

}
