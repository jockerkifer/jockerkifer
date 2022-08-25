import { Controller, Post, Request, UseGuards } from '@nestjs/common';
import { LocalAuthGuard } from 'src/local-auth.guard';
import { AuthService } from './auth.service';

@Controller('v1/auth')
export class AuthController {
    constructor(private authService: AuthService){}

    @UseGuards(LocalAuthGuard)
    @Post('login')
    async login(@Request() req: any){
        return this.authService.login(req.user)
    }
}