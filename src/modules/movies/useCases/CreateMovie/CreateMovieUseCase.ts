import { injectable, inject } from 'tsyringe';
import Movie from '../../entities/Movie';
import { IMoviesRepository } from '../../repositories/IMoviesRepository';
import { ICreateMovieRequestDTO } from './CreateMovieDTO';

@injectable()
export default class CreateMovieUseCase {
  constructor(
    @inject('MoviesRepository')
    private moviesRepository: IMoviesRepository,
  ) {}

  public async execute({
    title,
    director,
    quantity,
  }: Omit<ICreateMovieRequestDTO, 'quantity_available'>): Promise<Movie> {
    return this.moviesRepository.create({
      title,
      director,
      quantity,
      quantity_available: quantity,
    });
  }
}
