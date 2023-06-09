import { Body, Controller, Post, UseGuards, UsePipes } from '@nestjs/common';
import { CreateRoleDto } from './dto/create-role.dto';
import { RolesService } from './roles.service';
import { Roles } from 'src/auth/roles-auth.decorator';
import { RolesGuard } from 'src/auth/roles.guard';
import { ValidationPipe } from 'src/pipes/validation.pipe';


@Controller('role')
export class RolesController {
    constructor(private roleService: RolesService) {}

    //Создание роли
    @Roles('admin')
    @UseGuards(RolesGuard)
    @UsePipes(ValidationPipe)
    @Post()
    async create(@Body() dto: CreateRoleDto) {
        return this.roleService.createRole(dto)
    }
}
