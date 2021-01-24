import { injectable, inject } from 'tsyringe';
import Movie from '../../entities/Movie';
import { IMoviesRepository } from '../../repositories/IMoviesRepository';

@injectable()
export default class ListMoviesAvailableUseCase {
  constructor(
    @inject('MoviesRepository')
    private moviesRepository: IMoviesRepository,
  ) {}

  public async execute(): Promise<Movie[]> {
    return this.moviesRepository.ListMoviesAvailable();
  }
}
