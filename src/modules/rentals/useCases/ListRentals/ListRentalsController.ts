import { container } from 'tsyringe';
import { Request, Response } from 'express';
import { classToClass } from 'class-transformer';
import ListRentalsUseCase from './ListRentalsUseCase';

export default class ListRentalsController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const { email } = request.user;

    const listRentals = container.resolve(ListRentalsUseCase);

    try {
      const movies = await listRentals.execute(email);

      return response.status(200).json(classToClass(movies));
    } catch (err) {
      return response.status(400).json({
        message: err.message || 'Unexpected error.',
      });
    }
  }
}
