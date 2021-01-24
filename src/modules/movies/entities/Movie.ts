import { Exclude } from 'class-transformer';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('movies')
export default class Movie {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  director: string;

  @Exclude()
  @Column()
  quantity: number;

  @Exclude()
  @Column()
  quantity_available: number;
}
