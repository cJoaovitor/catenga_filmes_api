import { Module } from '@nestjs/common';
import { filmeService } from './filme.service'; 
import { FilmeController } from './filme.controller';

@Module({
    imports: [],
  controllers: [FilmeController],
  providers: [filmeService],
})
export class FilmeModule {}