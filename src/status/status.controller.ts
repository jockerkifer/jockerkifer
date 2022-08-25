import { Body, Controller, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { CreateStatusDto } from './dtos/create-status.dto';
import { UpdateStatusDto } from './dtos/update-status.dto';
import { StatusService } from './status.service';

@Controller('v1/status')
export class StatusController {

    constructor(private readonly statusService:StatusService){}


    @UseGuards(JwtAuthGuard)
    @Post()
    criarCadastro(@Body() createStatusDto:CreateStatusDto){
        return this.statusService.criarCadastro(createStatusDto)
    }

   @UseGuards(JwtAuthGuard)
   @Get()
   listaGeral(){
        return this.statusService.listaGeral()
   }
   
   @UseGuards(JwtAuthGuard)
   @Get(':_id')
   buscaId(@Param('_id') _id:string){
        return this.statusService.buscaId(_id)

   }

   @UseGuards(JwtAuthGuard)
   @Patch(':_id')
   atualizar(@Param('_id') _id:string, @Body() updateStatusDto:UpdateStatusDto ){
        return this.statusService.atualizar(_id, updateStatusDto)
   }
}