import { Module } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { SequelizeModule } from '@nestjs/sequelize';
import { AuthModule } from 'src/auth/auth.module';
import { RolesGuard } from 'src/auth/roles.guard';
import { FileModule } from 'src/file/file.module';
import { TextBlockController } from './text-block.controller';
import { TextBlock } from './text-block.model';
import { TextBlockService } from './text-block.service';

@Module({
  controllers: [TextBlockController],
  providers: [TextBlockService, JwtService, RolesGuard],
  imports: [
    SequelizeModule.forFeature([TextBlock]),
    AuthModule,
    FileModule
  ],
  exports: [TextBlockService]
})
export class TextBlockModule {}
