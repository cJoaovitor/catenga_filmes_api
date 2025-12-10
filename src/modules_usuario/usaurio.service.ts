import { BadRequestException, Injectable } from "@nestjs/common"; 
import { CreateUsuarioDTO } from "./DTO/create-usario.dot";
import { Usuario } from "./entities/usuario";

@Injectable()
export class UsaurioService {
    private usuarios: Usuario[] = [];

    createUsuario(createUsuarioDTO: CreateUsuarioDTO): Usuario {
        const { nome, idade, senha } = createUsuarioDTO;

        if (!nome || !idade || !senha) {
            throw new BadRequestException('Nome, idade e senha são obrigatórios');
        }

        const novoUsuario: Usuario = {
            id: this.usuarios.length + 1,
            nome,
            idade,
            senha,
            farvoritos: [],
        };

        this.usuarios.push(novoUsuario);
        return novoUsuario;
    }

    getAllUsuarios(): Usuario[] {
        return this.usuarios;
    }

    getUsuarioById(id: number): Usuario {
        const usuario = this.usuarios.find(u => u.id === id);
        if (!usuario) {
            throw new BadRequestException('Usuário não encontrado');
        }
        return usuario;
    }
}