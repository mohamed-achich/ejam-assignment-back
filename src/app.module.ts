import { Module } from '@nestjs/common';
import { SuperherosModule } from './superhero/superheros.module';

@Module({
  imports: [SuperherosModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
