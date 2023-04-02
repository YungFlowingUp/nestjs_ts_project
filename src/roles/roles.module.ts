import { Module, forwardRef } from '@nestjs/common';
import { RolesService } from './roles.service';
import { RolesController } from './roles.controller';
import { Role } from './roles.model';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from 'src/users/users.model';
import { UserRole } from './users-roles.model';
import { AuthModule } from 'src/auth/auth.module';
import { RolesGuard } from 'src/auth/roles.guard';
import { JwtService } from '@nestjs/jwt';

@Module({
  providers: [RolesService, JwtService, RolesGuard],
  controllers: [RolesController],
  imports: [
    SequelizeModule.forFeature([Role, User, UserRole]), // Доступ к репозиториям создаваемых таблиц
    forwardRef(()=> AuthModule)
  ],
  exports: [RolesService]
})
export class RolesModule {}