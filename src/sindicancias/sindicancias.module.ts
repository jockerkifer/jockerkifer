/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PresosSchema } from 'src/presos/interfaces/presos.schema';
import { PresosService } from 'src/presos/presos.service';
import { SindicanciaSchema } from './interface/sindicancias.schema';
import { SindicanciasController } from './sindicancias.controller';
import { SindicanciasService } from './sindicancias.service';

@Module({
    imports: [
        MongooseModule.forFeature([
            {name: 'Sindicancias', schema: SindicanciaSchema},
            {name: 'Presos', schema: PresosSchema}
        ])
    ],
    controllers: [SindicanciasController],
    providers: [SindicanciasService, PresosService],
})
export class SindicanciasModule {}
