import { ApiProperty } from '@nestjs/swagger';
import { Model, Column, DataType, Table, BelongsTo, ForeignKey } from 'sequelize-typescript';
import { User } from 'src/users/users.model';

interface CompanyCreationAttrs {
  name: string;
  userId: number;
  description: string;
}

@Table({ tableName: 'company' })
export class Company extends Model<Company, CompanyCreationAttrs> {
  @ApiProperty({ example: '1', description: 'Уникальный идентификатор' })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: 'user@mail.ru', description: 'Почтовый адрес' })
  @Column({ type: DataType.STRING, allowNull: false, unique: true })
  name: string;

  @ApiProperty({ example: 'user@mail.ru', description: 'Почтовый адрес' })
  @Column({ type: DataType.STRING })
  description: string;

  @ForeignKey(() => User)
  @Column({type: DataType.INTEGER})
  userId: number

  @BelongsTo(() => User)
  author: User
}
