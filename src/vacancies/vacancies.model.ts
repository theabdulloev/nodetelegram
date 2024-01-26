import { ApiProperty } from '@nestjs/swagger';
import {
  Model,
  Column,
  DataType,
  Table,
  BelongsTo,
  ForeignKey,
} from 'sequelize-typescript';
import { User } from 'src/users/users.model';

interface VacancyCreationAttrs {
  vacancyTitle: string;
  description: string;
  userId: number;
}

@Table({ tableName: 'vacancy' })
export class Vacancy extends Model<Vacancy, VacancyCreationAttrs> {
  @ApiProperty({ example: '2', description: 'Уникальный идентификатор' })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({ type: DataType.STRING, allowNull: false })
  vacancyTitle: string;

  @Column({ type: DataType.STRING, allowNull: false })
  description: string;

  @ForeignKey(() => User)
  @Column({ type: DataType.INTEGER })
  userId: number;

  @BelongsTo(() => User)
  author: User;
}
