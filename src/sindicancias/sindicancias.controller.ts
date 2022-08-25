import { Body, Controller, Post } from '@nestjs/common';
import { CreateSindicanciasDto } from './dto/create-sindicancias.dto';
import { SindicanciasService } from './sindicancias.service';

@Controller('v1/sindicancia')
export class SindicanciasController {

    constructor(private readonly sindicanciasService: SindicanciasService){}


    @Post()
    criarCadastro(@Body() createSindicanciasDto:CreateSindicanciasDto){
        return this.sindicanciasService.criarCadastro(createSindicanciasDto)

    }
 }
