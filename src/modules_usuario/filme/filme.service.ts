import { BadRequestException, Body, Controller, Delete, Get, Injectable, Param, Post } from '@nestjs/common';
import { CreateFilmeDTO } from "../DTO/create-filme.dto";
import { Filme} from 'src/modules_usuario/entities/filme';

@Injectable()
export class filmeService {
    private filmes: Filme[] = [];

    CreatUsuario(CreateFilmeDTO: CreateFilmeDTO): Filme {
        const { titulo, detalhes, dataLancamento, duracao, genero, urlImagem } = CreateFilmeDTO;

        const novoFilme: Filme = {
            id: this.filmes.length + 1,
            titulo,
            detalhes,
            dataLancamento,
            duracao,
            genero,
            urlImagem,
        };

        this.filmes.push(novoFilme);
        return novoFilme;
    }
    getAllFilmes(): Filme[] {
        return this.filmes;
    }
    getFilmeById(id: number): Filme {
        const filme = this.filmes.find(f => f.id === id);
        if (!filme) {
            throw new BadRequestException('Filme not found');
        }
        return filme;
    }
    
}


