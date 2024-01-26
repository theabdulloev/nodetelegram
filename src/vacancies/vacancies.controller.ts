import { Controller, Get, Post, Body, Patch, Param, Delete, Req } from '@nestjs/common';
import { VacanciesService } from './vacancies.service';
import { CreateVacancyDto } from './dto/create-vacancy.dto';
import { UpdateVacancyDto } from './dto/update-vacancy.dto';
import { ApiTags } from '@nestjs/swagger';
import { Request } from 'express';

@ApiTags('Ваканция')
@Controller('vacancies')
export class VacanciesController {
  constructor(private readonly vacanciesService: VacanciesService) {}

  @Post('/create')
  create(@Body() createVacancyDto: CreateVacancyDto, @Req() req: Request) {
    return this.vacanciesService.create(createVacancyDto,req);
  }

  @Get()
  findAll() {
    return this.vacanciesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.vacanciesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateVacancyDto: UpdateVacancyDto) {
    return this.vacanciesService.update(+id, updateVacancyDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.vacanciesService.remove(+id);
  }
}
