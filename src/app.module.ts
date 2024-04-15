import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { UsersModule } from './users/users.module';
import { User } from './users/users.model';
import { RolesModule } from './roles/roles.module';
import { Role } from './roles/roles.model';
import { UserRoles } from './roles/user-roles.model';
import { AuthModule } from './auth/auth.module';
import { PostsModule } from './posts/posts.module';
import { Post } from './posts/posts.model';
import { FilesModule } from './files/files.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { CompanyModule } from './company/company.module';
import * as path from 'path';
import { Company } from './company/company.model';
import { Vacancy } from './vacancies/vacancies.model';
import { VacanciesModule } from './vacancies/vacancies.module';
import { TelegramService } from './telegram/telegram.service';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: path.resolve(__dirname, 'static'),
    }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'admin3323',
      database: 'vacanciesDB',
      models: [User, Role, UserRoles, Post,Company,Vacancy],
      autoLoadModels: true,
    }),
    UsersModule,
    RolesModule,
    AuthModule,
    PostsModule,
    FilesModule,
    CompanyModule,
    VacanciesModule
  ],
  controllers: [],
  providers: [TelegramService],
})
export class AppModule {}
