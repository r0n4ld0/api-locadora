import Rental from '../entities/Rental';
import { IRentMovieDTO } from '../useCases/RentMovie/RentMovieDTO';

export interface IRentalsRepository {
  rent(data: IRentMovieDTO): Promise<void>;
  return(rental: Rental): Promise<void>;
  findById(rentalId: number): Promise<Rental | undefined>;
  ListRentalsPending(UserId: number): Promise<Rental[]>;
  findRentByUserAndMovie(
    user_id: number,
    movie_id: number,
  ): Promise<Rental | undefined>;
}
