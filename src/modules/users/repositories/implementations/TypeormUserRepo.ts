import { getRepository, Repository } from 'typeorm';
import { ICreateUserRequestDTO } from '../../useCases/CreateUser/CreateUserDTO';
import User from '../../entities/User';
import { IUsersRepository } from '../IUsersRepository';

export default class TypeormUserRepo implements IUsersRepository {
  private ormRepository: Repository<User>;

  constructor() {
    this.ormRepository = getRepository(User);
  }

  public async findById(userId: number): Promise<User | undefined> {
    const user = this.ormRepository.findOne({ id: userId });

    return user;
  }

  public async findByEmail(email: string): Promise<User | undefined> {
    const user = this.ormRepository.findOne({ where: { email } });

    return user;
  }

  public async save(user: User): Promise<User> {
    return this.ormRepository.save(user);
  }

  public async create(userData: ICreateUserRequestDTO): Promise<User> {
    const user = this.ormRepository.create(userData);

    await this.ormRepository.save(user);

    return user;
  }

  public async login(email: string): Promise<void> {
    const user = await this.findByEmail(email);

    if (user) {
      user.is_logged = true;
      await this.ormRepository.save(user);
    }
  }

  public async logout(email: string): Promise<void> {
    const user = await this.findByEmail(email);

    if (user) {
      user.is_logged = false;
      await this.ormRepository.save(user);
    }
  }
}
