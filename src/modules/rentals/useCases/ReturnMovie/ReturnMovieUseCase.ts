import { inject, injectable } from 'tsyringe';
import { IMoviesRepository } from '../../../movies/repositories/IMoviesRepository';
import { IUsersRepository } from '../../../users/repositories/IUsersRepository';
import { IRentalsRepository } from '../../repositories/IRentalsRepository';
import { IRenturnMovieRequestDTO } from './ReturnMovieDTO';

@injectable()
export default class ReturnMovieUseCase {
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
  }: IRenturnMovieRequestDTO): Promise<void> {
    const user = await this.usersRepository.findByEmail(email);

    if (!user || !user.is_logged) {
      throw new Error('User is probably not logged in. Please login again.');
    }

    const rental = await this.rentalsRepository.findRentByUserAndMovie(
      user.id,
      movie_id,
    );

    if (!rental) {
      throw new Error('Rental not found');
    }
    await this.moviesRepository.renturnMovie(movie_id);

    return this.rentalsRepository.return(rental);
  }
}
