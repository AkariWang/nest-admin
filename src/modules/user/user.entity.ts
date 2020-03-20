import { PrimaryGeneratedColumn, Column, Entity } from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 45 })
  name: string;

  @Column('int')
  age: number;

  @Column('date')
  birth: string;

  @Column()
  email: string;

  @Column()
  tel: string;
}