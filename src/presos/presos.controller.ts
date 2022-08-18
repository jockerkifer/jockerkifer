import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { CreatePresosDto } from './dtos/create-presos.dto';
import { UpdatePresosDto } from './dtos/update-presos.dto';
import { PresosService } from './presos.service';

@Controller('v1/presos')
export class PresosController {

    constructor(private readonly presosService: PresosService){}

    @Post()
    criarCadastro(@Body() createPresosDto: CreatePresosDto){
        return this.presosService.criarCadastro(createPresosDto)
    }

    @Get()
    buscaGeral(){
        return this.presosService.buscaGeral()
    }

    @Get(':_id')
    buscaId(@Param('_id') _id:string){
        return this.presosService.buscaId(_id)
    }

    @Patch(':_id')
    atualizar(@Param('_id') _id:string , @Body() updatePresosDto:UpdatePresosDto){
        return this.presosService.atualizar(_id, updatePresosDto)
    }

    @Delete(':_id')
    deletar(@Param('_id') _id:string)
    {
        return this.presosService.delete(_id)
    }
}