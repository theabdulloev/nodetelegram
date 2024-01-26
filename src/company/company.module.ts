import { Module, forwardRef } from '@nestjs/common';
import { CompanyService } from './company.service';
import { CompanyController } from './company.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Company } from './company.model';
import { AuthModule } from 'src/auth/auth.module';
import { User } from 'src/users/users.model';

@Module({
  controllers: [CompanyController],
  providers: [CompanyService],
  imports: [
    SequelizeModule.forFeature([User,Company]),
    forwardRef(() => AuthModule),

  ]
})
export class CompanyModule {}
