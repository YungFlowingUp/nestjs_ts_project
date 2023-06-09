import { Body, Controller, Post, UsePipes } from '@nestjs/common';
import { CreateProfileDto } from 'src/profiles/dto/create-profile.dto';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { AuthService } from './auth.service';
import { ValidationPipe } from 'src/pipes/validation.pipe';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    // Авторизация
    @UsePipes(ValidationPipe)
    @Post('/login')
    async login(@Body() dto: CreateUserDto) {
        return this.authService.login(dto)
    }

    // Регистрация
    @UsePipes(ValidationPipe)
    @Post('/register')
    async register(@Body() dto: CreateProfileDto) {
        return this.authService.register(dto)
    }

}
