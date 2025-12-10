import { Filme } from "./filme";
export class Usuario {
    id: number;
    nome: String;
    idade: number;
    farvoritos: Filme[];
    senha: String;
}