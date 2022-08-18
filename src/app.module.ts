import { UsuariosModule } from './usuarios/usuarios.module';
import { UsuariosController } from './usuarios/usuarios.controller';
import { AuthModule } from './auth/auth.module';
import { AuthController } from './auth/auth.controller';
import { GruposModule } from './grupos/grupos.module';
import { FuncionariosModule } from './funcionarios/funcionarios.module';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PresosModule } from './presos/presos.module';
import { StatusModule } from './status/status.module';

@Module({
  imports: [
    UsuariosModule,
    AuthModule,
    GruposModule,
    FuncionariosModule,
    MongooseModule.forRoot('mongodb://localhost:27017',
      {
        useNewUrlParser: true,
        useUnifiedTopology: true
      }), PresosModule, StatusModule],


  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }