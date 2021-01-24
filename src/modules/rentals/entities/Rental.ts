import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  JoinColumn,
  ManyToOne,
} from 'typeorm';

import User from '../../users/entities/User';
import Movie from '../../movies/entities/Movie';

@Entity('retals')
export default class Rental {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @Column()
  user_id: number;

  @ManyToOne(() => Movie)
  @JoinColumn({ name: 'movie_id' })
  movie: Movie;

  @Column()
  movie_id: number;

  @Column()
  @Column({ default: false })
  is_returned: boolean;
}
