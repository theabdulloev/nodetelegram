import { Injectable } from '@nestjs/common';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Company } from './company.model';
import { Request } from 'express';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class CompanyService {
  constructor(
    @InjectModel(Company) private companyRepository: typeof Company,
    private jwtService: JwtService,
  ) {}

  async create(createCompanyDto: CreateCompanyDto, req: Request) {
    const authHeader = req.headers.authorization;
    const token = authHeader.split(' ')[1];
    const user = this.jwtService.verify(token);
    const company = await this.companyRepository.create({
      ...createCompanyDto,
      userId: user.id,
    });
    return company;
  }

  async findAll() {
    return await this.companyRepository.findAll({ include: { all: true } });
  }

  findOne(id: number) {
    return `This action returns a #${id} company`;
  }

  async update(id: number, updateCompanyDto: UpdateCompanyDto) {

    const company = await this.companyRepository.update(updateCompanyDto, { where: { id: id } });
    return company;
  }
// test
  async remove(id: number) {
    const company = await this.companyRepository.destroy({ where: { id: id } });
    return company;
  }
}
