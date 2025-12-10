import {Body, Controller, Get, Post} from '@nestjs/common';
import { UsaurioService } from './usaurio.service';
import { CreateCatDTO } from './DTO/craetCatDTO';
import { Usuario } from './entities/usuario';

@Controller('usuario')

 class UsuarioController {
    constructor(private readonly usuarioService: UsaurioService) {}

    @Post()
    createUsuario(@Body() createCatDTO: CreateCatDTO): Usuario {
        return this.usuarioService.createUsuario(createCatDTO);
    }
    @Get('/user/all')
    getAllUsuarios(): Usuario[] {
        return this.usuarioService.getAllUsuarios();
    }
    @Get('/user/:id')
    getUsuarioById(id: number): Usuario {
        return this.usuarioService.getUsuarioById(id);
    }
}

export { UsuarioController };