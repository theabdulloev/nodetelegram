import { Injectable } from '@nestjs/common';
import { CreateVacancyDto } from './dto/create-vacancy.dto';
import { UpdateVacancyDto } from './dto/update-vacancy.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Vacancy } from './vacancies.model';
import { Request } from 'express';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class VacanciesService {
  constructor(
    @InjectModel(Vacancy) private vacancyRepository: typeof Vacancy,
    private jwtService: JwtService,
  ) {}

  async create(createVacancyDto: CreateVacancyDto, req: Request) {
    const authHeader = req.headers.authorization;
    const token = authHeader.split(' ')[1];
    const user = this.jwtService.verify(token);
    const vacancy = await this.vacancyRepository.create({...createVacancyDto, userId: user.id});
    return vacancy;
  }

  async findAll() {
    return await this.vacancyRepository.findAll({ include: { all: true } });
  }

  findOne(id: number) {
    return `This action returns a #${id} vacancy`;
  }

  update(id: number, updateVacancyDto: UpdateVacancyDto) {
    return `This action updates a #${id} vacancy`;
  }

  remove(id: number) {
    return `This action removes a #${id} vacancy`;
  }
}
