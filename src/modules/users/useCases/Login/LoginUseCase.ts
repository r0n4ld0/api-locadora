import { inject, injectable } from 'tsyringe';
import { sign } from 'jsonwebtoken';

import IHashProvider from '../../providers/HashProvider/IHashProvider';
import { IUsersRepository } from '../../repositories/IUsersRepository';
import { ILoginRequestDTO, ILoginResponseDTO } from './LoginDTO';
import authConfig from '../../../../config/auth';

@injectable()
export default class LoginUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,

    @inject('HashProvider')
    private hashProvider: IHashProvider,
  ) {}

  public async execute({
    email,
    password,
  }: ILoginRequestDTO): Promise<ILoginResponseDTO> {
    const user = await this.usersRepository.findByEmail(email);

    if (!user) {
      throw new Error('Incorrect email/password.');
    }

    const passwordMatched = await this.hashProvider.compareHash(
      password,
      user.password,
    );

    if (!passwordMatched) {
      throw new Error('Incorrect email/password.');
    }

    const { secret, expiresIn } = authConfig.jwt;

    const token = sign({}, secret, {
      subject: user.email,
      expiresIn,
    });

    await this.usersRepository.login(user.email);

    return { user, token };
  }
}
