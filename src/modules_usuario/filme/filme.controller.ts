import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { Filme } from '../entities/filme';
import { filmeService } from './filme.service';
import { CreateFilmeDTO } from '../DTO/create-filme.dto';

@Controller('filme')
export class FilmeController {
    constructor(private readonly filmeService: filmeService) {}

    @Post()
    createFilme(@Body() createFilmeDTO: CreateFilmeDTO): Filme {
        return this.filmeService.CreatUsuario(createFilmeDTO);
    }
    @Get('all')
    getAllFilmes(): Filme[] {
        return this.filmeService.getAllFilmes();
    }
    @Get(':id')
    getFilmeById(@Param('id') id: number): Filme {
        return this.filmeService.getFilmeById(id);
    }
}