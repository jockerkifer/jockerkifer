import { AuthService } from './auth.service';
/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsuariosSchema } from 'src/usuarios/interface/usuarios.schema';
import { AuthController } from './auth.controller';
import { UsuariosModule } from 'src/usuarios/usuarios.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants';
import { LocalStrategy } from './local.strategy';
import { JwtStrategy } from './jwt.strategy';
import { UsuariosService } from 'src/usuarios/usuarios.service';

@Module({
    imports: [
        MongooseModule.forFeature([
            {name: 'Usuarios' ,schema: UsuariosSchema}
        ]),
        UsuariosModule,
        PassportModule,
        JwtModule.register({
            secret: jwtConstants.secret,
            signOptions: { expiresIn: '432000s' }
        })
    ],
    controllers: [
        AuthController,
    ],
    providers: [
        LocalStrategy,
        JwtStrategy,
        AuthService,
        UsuariosService,
        
    ],
       
    exports:[AuthService]
})
export class AuthModule { }
