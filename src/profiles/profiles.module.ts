import { forwardRef, Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from 'src/users/users.model';
import { UsersService } from 'src/users/users.service';
import { ProfileController } from './profiles.controller';
import { ProfileService } from './profiles.service';
import { Profile } from './profiles.model';
import { RolesModule } from 'src/roles/roles.module';
import { AuthModule } from 'src/auth/auth.module';
import { RolesGuard } from 'src/auth/roles.guard';
import { JwtService } from '@nestjs/jwt';
import { AuthService } from 'src/auth/auth.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Module({
  controllers: [ProfileController],
  providers: [ProfileService, UsersService, RolesGuard, JwtService, JwtAuthGuard],
  imports: [
    SequelizeModule.forFeature([Profile, User]),
    RolesModule,
    forwardRef(()=> AuthModule)     
  ],
  exports: [ProfileService]
})
export class ProfileModule {}
