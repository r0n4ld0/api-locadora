import User from '../entities/User';
import { ICreateUserRequestDTO } from '../useCases/CreateUser/CreateUserDTO';

export interface IUsersRepository {
  findById(userId: number): Promise<User | undefined>;
  findByEmail(email: string): Promise<User | undefined>;
  create(userData: ICreateUserRequestDTO): Omit<Promise<User>, 'password'>;
  save(user: User): Promise<User>;
  login(email: string): Promise<void>;
  logout(email: string): Promise<void>;
}
