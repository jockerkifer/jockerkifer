import { UsuariosService } from './usuarios.service';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsuariosSchema } from './interface/usuarios.schema';
import { UsuariosController } from './usuarios.controller';

@Module({
    imports: [
        MongooseModule.forFeature([
            {name: 'Usuarios', schema: UsuariosSchema}
        ])
    ],
    controllers: [UsuariosController],
    providers: [UsuariosService]
})
export class UsuariosModule { }
