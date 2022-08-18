import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { FuncionariosController } from './funcionarios.controller';
import { FuncionariosService } from './funcionarios.service';
import { FuncionarioSchema } from './interface/funcionarios.schema';

@Module({
    imports: [
        MongooseModule.forFeature([
            {name: 'Funcionarios', schema: FuncionarioSchema}
        ])
    ],
    controllers: [FuncionariosController],
    providers: [FuncionariosService],
})
export class FuncionariosModule {}