import { Module } from '@nestjs/common';
import { Filme } from './../entities/filme';
import { FilmeController } from './filme.controller';

@Module({
    imports: [],
  controllers: [FilmeController],
  providers: [Filme],
})
export class FilmeModule {}