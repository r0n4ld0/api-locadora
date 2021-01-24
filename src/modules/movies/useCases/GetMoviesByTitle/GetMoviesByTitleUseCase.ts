import { injectable, inject } from 'tsyringe';
import Movie from '../../entities/Movie';
import { IMoviesRepository } from '../../repositories/IMoviesRepository';

@injectable()
export default class GetMoviesByTitleUseCase {
  constructor(
    @inject('MoviesRepository')
    private moviesRepository: IMoviesRepository,
  ) {}

  public async execute(title: string): Promise<Movie[]> {
    const movies = await this.moviesRepository.findByTitle(title);

    return movies;
  }
}
