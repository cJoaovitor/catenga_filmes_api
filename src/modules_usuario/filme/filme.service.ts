import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateFilmeDTO } from '../DTO/create-filme.dto';
import { Filme } from 'src/modules_usuario/entities/filme';

@Injectable()
export class filmeService {
  private filmes: Filme[] = [];

  constructor() {
    this.carregarFilmesIniciais();
  }

  private carregarFilmesIniciais() {
    const listaOriginal = [
      {
        titulo: "Interestelar",
        genero: "Ficção Científica",
        imagem: "https://image.tmdb.org/t/p/w500/nBNZadXqJSdt05SHLqgT0HuC5Gm.jpg",
        sinopse: "A Terra está em colapso...",
        ficha: {
          Diretor: "Christopher Nolan",
          Ano: "2014",
          Duração: "2h 49min",
          Classificação: "12 anos"
        }
      },
      {
        titulo: "A Origem",
        genero: "Ação / Ficção",
        imagem: "https://image.tmdb.org/t/p/w500/s3TBrRGB1iav7gFOCNx3H31MoES.jpg",
        sinopse: "Um ladrão profissional invade sonhos...",
        ficha: {
          Diretor: "Christopher Nolan",
          Ano: "2010",
          Duração: "2h 28min",
          Classificação: "14 anos"
        }
      },

     
    ];

    this.filmes = listaOriginal.map((f, index) => ({
      id: index + 1,
      titulo: f.titulo,
      detalhes: f.sinopse,
      dataLancamento: f.ficha.Ano,
      duracao: this.converterDuracao(f.ficha.Duração),
      genero: f.genero,
      urlImagem: f.imagem,
      ClassificacaoIndicativa: f.ficha.Classificação,
    }));
  }

  private converterDuracao(texto: string): number {
    // "2h 30min" → 150 minutos
    const hora = Number(texto.split("h")[0]);
    const minutos = Number(texto.split("h")[1].replace("min", "").trim());
    return hora * 60 + minutos;
  }


  CreatUsuario(CreateFilmeDTO: CreateFilmeDTO): Filme {
    const { titulo, detalhes, dataLancamento, duracao, genero, urlImagem, ClassificacaoIndicativa } = CreateFilmeDTO;

    const novoFilme: Filme = {
      id: this.filmes.length + 1,
      titulo,
      detalhes,
      dataLancamento,
      duracao,
      genero,
      urlImagem,
      ClassificacaoIndicativa,
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
