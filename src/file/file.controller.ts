import { Controller, Delete, UseGuards } from '@nestjs/common';
import { FileService } from './file.service';
import { Roles } from 'src/auth/roles-auth.decorator';
import { RolesGuard } from 'src/auth/roles.guard';

@Controller('file')
export class FileController {
    constructor(private fileService: FileService) {}

    @Roles('admin')
    @UseGuards(RolesGuard)
    @Delete('/clear')
    async clearFiles() {
        return this.fileService.checkFiles()
    }
}
