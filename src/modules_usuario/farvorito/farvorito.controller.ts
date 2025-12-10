import { Body, Controller, Get, Post } from "@nestjs/common";
import { farvoritos } from "../entities/favorito";
import { farvoritoService } from "./farvorito.service";
import { CreateFavoritoDTO } from "../DTO/create-farvorito.dot";

@Controller('favorito')
export class FarvoritoController {
    constructor(private readonly farvoritoService: farvoritoService) {}

    @Post()
    createFavorito(@Body() createFavoritoDTO: CreateFavoritoDTO): farvoritos {
        return this.farvoritoService.createFavorito(createFavoritoDTO);
    }
    @Get('favorito/all')
    getAllFavoritos(): farvoritos[] {
        return this.farvoritoService.getAllFavoritos();
    }
    @Get('favorito/:id')
    getFavoritoById(id: number): farvoritos | undefined {
        return this.farvoritoService.getFavoritoById(id);
    }
}