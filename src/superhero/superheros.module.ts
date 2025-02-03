import { Module } from '@nestjs/common';
import { SuperherosController } from './superheros.controller';
import { SuperherosService } from './superheros.service';

@Module({
  controllers: [SuperherosController],
  providers: [SuperherosService],
})
export class SuperherosModule {}