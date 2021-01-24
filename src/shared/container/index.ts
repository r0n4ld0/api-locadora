import { container } from 'tsyringe';

import '../../modules/users/providers';

import { IUsersRepository } from '../../modules/users/repositories/IUsersRepository';
import TypeormUserRepo from '../../modules/users/repositories/implementations/TypeormUserRepo';

import { IMoviesRepository } from '../../modules/movies/repositories/IMoviesRepository';
import TypeormMovieRepo from '../../modules/movies/repositories/implementations/TypeormMovieRepo';

import { IRentalsRepository } from '../../modules/rentals/repositories/IRentalsRepository';
import TypeormRentalRepo from '../../modules/rentals/repositories/implementations/TypeormRentalRepo';

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  TypeormUserRepo,
);

container.registerSingleton<IMoviesRepository>(
  'MoviesRepository',
  TypeormMovieRepo,
);

container.registerSingleton<IRentalsRepository>(
  'RentalsRepository',
  TypeormRentalRepo,
);
