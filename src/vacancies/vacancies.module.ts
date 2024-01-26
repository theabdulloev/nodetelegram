import { Module, forwardRef } from '@nestjs/common';
import { VacanciesService } from './vacancies.service';
import { VacanciesController } from './vacancies.controller';
import { Vacancy } from './vacancies.model';
import { User } from 'src/users/users.model';
import { SequelizeModule } from '@nestjs/sequelize';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  controllers: [VacanciesController],
  providers: [VacanciesService],
  imports: [
    SequelizeModule.forFeature([User,Vacancy]),
    forwardRef(() => AuthModule),

  ]
})
export class VacanciesModule {}
