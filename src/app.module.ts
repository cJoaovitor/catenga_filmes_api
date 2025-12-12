import { Module } from '@nestjs/common';
import { FilmeModule } from './modules_usuario/filme/filme.module';


@Module({
  imports: [
    FilmeModule,
  ],
})
export class AppModule {}