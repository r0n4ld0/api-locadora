import { Request, Response } from 'express';
import { container } from 'tsyringe';
import LogoutUseCase from './LogoutUseCase';

export default class LogoutController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const { email } = request.user;

    const logout = container.resolve(LogoutUseCase);

    try {
      await logout.execute(email);

      return response.status(200).json({ message: 'User logged out' });
    } catch (err) {
      return response.status(400).json({
        message: err.message || 'Unexpected error.',
      });
    }
  }
}
