import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { CreateStatusDto } from './dtos/create-status.dto';
import { UpdateStatusDto } from './dtos/update-status.dto';
import { StatusService } from './status.service';

@Controller('v1/status')
export class StatusController {

    constructor(private readonly statusService:StatusService){}


    @Post()
    criarCadastro(@Body() createStatusDto:CreateStatusDto){
        return this.statusService.criarCadastro(createStatusDto)
    }

   @Get()
   listaGeral(){
        return this.statusService.listaGeral()
   }
   
   @Get(':_id')
   buscaId(@Param('_id') _id:string){
        return this.statusService.buscaId(_id)

   }

   @Patch(':_id')
   atualizar(@Param('_id') _id:string, @Body() updateStatusDto:UpdateStatusDto ){
        return this.statusService.atualizar(_id, updateStatusDto)
   }
}