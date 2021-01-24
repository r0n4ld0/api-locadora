import { getRepository, Repository } from 'typeorm';
import Rental from '../../entities/Rental';
import { IRentMovieDTO } from '../../useCases/RentMovie/RentMovieDTO';
import { IRentalsRepository } from '../IRentalsRepository';

export default class TypeormRentalRepo implements IRentalsRepository {
  private ormRepository: Repository<Rental>;

  constructor() {
    this.ormRepository = getRepository(Rental);
  }

  public async rent({ user_id, movie_id }: IRentMovieDTO): Promise<void> {
    const rental = this.ormRepository.create({ user_id, movie_id });

    await this.ormRepository.save(rental);
  }

  public async return(rental: Rental): Promise<void> {
    const UpdatedRental = rental;
    UpdatedRental.is_returned = true;

    await this.ormRepository.save(UpdatedRental);
  }

  public async findRentByUserAndMovie(
    user_id: number,
    movie_id: number,
  ): Promise<Rental | undefined> {
    const rental = await this.ormRepository.findOne({
      where: { user_id, movie_id },
    });

    return rental;
  }

  public async findById(rentalId: number): Promise<Rental | undefined> {
    const rentals = await this.ormRepository.findOne({ id: rentalId });

    return rentals;
  }

  public async ListRentalsPending(userId: number): Promise<Rental[]> {
    const rentals = await this.ormRepository.find({
      where: { user_id: userId, is_returned: false },
      select: ['id', 'is_returned'],
      relations: ['user', 'movie'],
    });

    return rentals;
  }
}
