import { SindicanciasModule } from './sindicancias/sindicancias.module';
import { UsuariosModule } from './usuarios/usuarios.module';
import { AuthModule } from './auth/auth.module';
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
    SindicanciasModule,
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