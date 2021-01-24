import { injectable, inject } from 'tsyringe';
import { IUsersRepository } from '../../../users/repositories/IUsersRepository';
import Rental from '../../entities/Rental';
import { IRentalsRepository } from '../../repositories/IRentalsRepository';

@injectable()
export default class ListRentalsUseCase {
  constructor(
    @inject('RentalsRepository')
    private rentalsRepository: IRentalsRepository,

    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  public async execute(email: string): Promise<Rental[]> {
    const user = await this.usersRepository.findByEmail(email);

    if (!user) {
      throw new Error('User not found');
    }

    if (!user.is_logged) {
      throw new Error('User is probably not logged in. Please login again.');
    }

    return this.rentalsRepository.ListRentalsPending(user.id);
  }
}
