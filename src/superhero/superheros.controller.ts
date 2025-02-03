import { Controller, Get, Post, Body } from '@nestjs/common';
import { SuperherosService } from './superheros.service';
import { CreateSuperheroDto } from './dto/create-superhero.dto';
import { Superhero } from './interfaces/superhero.interface';

@Controller('superheroes')
export class SuperherosController {
  constructor(private readonly superherosService: SuperherosService) {}

  @Post()
  create(@Body() createSuperheroDto: CreateSuperheroDto): Superhero {
    return this.superherosService.create(createSuperheroDto);
  }

  @Get()
  findAll(): Superhero[] {
    return this.superherosService.findAll();
  }
}