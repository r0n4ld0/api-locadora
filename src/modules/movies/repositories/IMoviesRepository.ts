import Movie from '../entities/Movie';
import { ICreateMovieRequestDTO } from '../useCases/CreateMovie/CreateMovieDTO';

export interface IMoviesRepository {
  create(MovieData: ICreateMovieRequestDTO): Promise<Movie>;
  save(movie: Movie): Promise<Movie>;
  ListMoviesAvailable(): Promise<Movie[]>;
  findByTitle(title: string): Promise<Movie[]>;
  findById(movieId: number): Promise<Movie | undefined>;
  rentMovie(movieId: number): Promise<void>;
  renturnMovie(movieId: number): Promise<void>;
}
