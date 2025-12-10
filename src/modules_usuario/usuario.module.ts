import { Module } from '@nestjs/common';
import { UsaurioService } from './usaurio.service';
import { UsuarioController } from './usuario.controller';

@Module({
    imports: [],
  controllers: [UsuarioController],
  providers: [UsaurioService],
})
export class UsuarioModule {}