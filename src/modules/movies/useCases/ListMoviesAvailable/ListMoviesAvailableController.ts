import { container } from 'tsyringe';
import { Request, Response } from 'express';
import { classToClass } from 'class-transformer';
import ListMoviesAvailableUseCase from './ListMoviesAvailableUseCase';

export default class ListMoviesAvailableController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const listMovies = container.resolve(ListMoviesAvailableUseCase);

    try {
      const movies = await listMovies.execute();

      return response.status(200).json(classToClass(movies));
    } catch (err) {
      return response.status(400).json({
        message: err.message || 'Unexpected error.',
      });
    }
  }
}
