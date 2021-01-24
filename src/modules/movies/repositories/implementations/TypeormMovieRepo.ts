import { getRepository, Repository, MoreThan, Like } from 'typeorm';
import { ICreateMovieRequestDTO } from '../../useCases/CreateMovie/CreateMovieDTO';
import Movie from '../../entities/Movie';
import { IMoviesRepository } from '../IMoviesRepository';

export default class TypeormUserRepo implements IMoviesRepository {
  private ormRepository: Repository<Movie>;

  constructor() {
    this.ormRepository = getRepository(Movie);
  }

  public async save(movie: Movie): Promise<Movie> {
    return this.ormRepository.save(movie);
  }

  public async create(movieData: ICreateMovieRequestDTO): Promise<Movie> {
    const movie = this.ormRepository.create(movieData);

    await this.ormRepository.save(movie);

    return movie;
  }

  public async findById(movieId: number): Promise<Movie | undefined> {
    const movie = this.ormRepository.findOne({ id: movieId });

    return movie;
  }

  public async ListMoviesAvailable(): Promise<Movie[]> {
    const movies = await this.ormRepository.find({
      quantity_available: MoreThan(0),
    });

    return movies;
  }

  public async findByTitle(title: string): Promise<Movie[]> {
    const movies = await this.ormRepository.find({
      title: Like(`%${title}%`),
    });

    return movies;
  }

  public async rentMovie(movieId: number): Promise<void> {
    const movie = await this.findById(movieId);

    if (movie) {
      movie.quantity_available -= 1;
      await this.ormRepository.save(movie);
    }
  }

  public async renturnMovie(movieId: number): Promise<void> {
    const movie = await this.findById(movieId);

    if (movie) {
      movie.quantity_available += 1;
      await this.ormRepository.save(movie);
    }
  }
}
