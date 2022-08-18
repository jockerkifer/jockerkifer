import { Module } from '@nestjs/common';
import { PresosService } from './presos.service';
import { PresosController } from './presos.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { PresosSchema } from './interfaces/presos.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {name: 'Presos', schema: PresosSchema}
    ])
  ],
  providers: [PresosService],
  controllers: [PresosController]
})
export class PresosModule {}
