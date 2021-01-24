import User from '../../entities/User';

export interface ILoginRequestDTO {
  email: string;
  password: string;
}

export interface ILoginResponseDTO {
  user: Omit<User, 'passwword'>;
  token: string;
}
