import { inject, injectable } from 'tsyringe';
import { IUsersRepository } from '../../../users/repositories/IUsersRepository';
import { IMoviesRepository } from '../../../movies/repositories/IMoviesRepository';
import { IRentalsRepository } from '../../repositories/IRentalsRepository';
import { IRentMovieRequestDTO } from './RentMovieDTO';

@injectable()
export default class RentMovieUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,

    @inject('MoviesRepository')
    private moviesRepository: IMoviesRepository,

    @inject('RentalsRepository')
    private rentalsRepository: IRentalsRepository,
  ) {}

  public async execute({
    email,
    movie_id,
  }: IRentMovieRequestDTO): Promise<void> {
    const user = await this.usersRepository.findByEmail(email);

    if (!user) {
      throw new Error('User not found');
    }

    if (!user.is_logged) {
      throw new Error('User is probably not logged in. Please login again.');
    }

    const movie = await this.moviesRepository.findById(movie_id);

    if (!movie) {
      throw new Error('Movie not found');
    }

    if (movie.quantity_available === 0) {
      throw new Error('Movie unavailable');
    }
    await this.moviesRepository.rentMovie(movie.id);

    return this.rentalsRepository.rent({ user_id: user.id, movie_id });
  }
}
