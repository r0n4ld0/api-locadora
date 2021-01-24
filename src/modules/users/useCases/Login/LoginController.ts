import { classToClass } from 'class-transformer';
import { Request, Response } from 'express';
import { container } from 'tsyringe';
import LoginUseCase from './LoginUseCase';

export default class LoginController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body;

    const login = container.resolve(LoginUseCase);

    try {
      const logged = await login.execute({ email, password });

      return response.json(classToClass(logged));
    } catch (err) {
      return response.status(400).json({
        message: err.message || 'Unexpected error.',
      });
    }
  }
}
