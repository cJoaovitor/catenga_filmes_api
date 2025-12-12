import { Injectable } from '@nestjs/common';
import { CreateFavoritoDTO } from '../DTO/create-farvorito.dot';
import { farvoritos } from 'src/modules_usuario/entities/favorito';

@Injectable()
export class farvoritoService {
    private favoritos: farvoritos[] = []; 
    createFavorito(createFavoritoDTO: CreateFavoritoDTO): farvoritos {
        const { idUsuario, idFilme } = createFavoritoDTO;
        const novoFavorito: farvoritos = {
            id: this.favoritos.length + 1,
            idFilme,
            idUsuario,
            
        };
        this.favoritos.push(novoFavorito);
        return novoFavorito;
    }
    getAllFavoritos(): farvoritos[] {
        return this.favoritos;
    }
    getFavoritoById(id: number): farvoritos | undefined {
        return this.favoritos.find(f => f.id === id);
    }
}