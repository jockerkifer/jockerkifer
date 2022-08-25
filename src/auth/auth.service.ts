import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt'
import { UsuariosService } from 'src/usuarios/usuarios.service';

@Injectable()
export class AuthService {

    constructor(
        private readonly usuariosService: UsuariosService,
        private readonly jwtService:JwtService
    ){}

    async validadeUser(email: string, password:string){
        const user = await this.usuariosService.buscaEmail(email)
        const isMath = await bcrypt.compare(password,user.password)
        if(user && isMath === true) {
            const {_id,nome,email } = user
            return {_id,nome,email}
        }
        return null
    }

    async login(usuario:any){
        const payload = { email: usuario.email, sub: usuario.sub}
        return {
            usuario: usuario,
            access_token:this.jwtService.sign(payload) // Gera um tokem com o payload definido
        }  
    }

}

    


    
 
