import { GruposService } from './grupos.service';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { GruposController } from './grupos.controller';
import { GruposSchema } from './interface/grupos.schema';

@Module({
    imports: [
        MongooseModule.forFeature([
            {name: 'Grupos', schema:GruposSchema}
        ])
    ],
    controllers: [GruposController],
    providers: [GruposService,],
})
export class GruposModule { }
