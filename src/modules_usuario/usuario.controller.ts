import {Body, Controller, Get, Post} from '@nestjs/common';
import { UsaurioService } from './usaurio.service';
import { CreateUsuarioDTO } from './DTO/create-usario.dot';
import { Usuario } from './entities/usuario';

@Controller('usuario')

 class UsuarioController {
    constructor(private readonly usuarioService: UsaurioService) {}

    @Post()
    createUsuario(@Body() createUsuarioDTO: CreateUsuarioDTO): Usuario {
        return this.usuarioService.createUsuario(createUsuarioDTO);
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