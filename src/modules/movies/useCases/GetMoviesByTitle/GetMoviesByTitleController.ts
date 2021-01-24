import { container } from 'tsyringe';
import { Request, Response } from 'express';
import { classToClass } from 'class-transformer';
import GetMoviesByTitleUseCase from './GetMoviesByTitleUseCase';

export default class GetMoviesByTitleController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const title: string = request.query.filter as string;

    const listMovies = container.resolve(GetMoviesByTitleUseCase);

    try {
      const movies = await listMovies.execute(title);

      return response.status(200).json(classToClass(movies));
    } catch (err) {
      return response.status(400).json({
        message: err.message || 'Unexpected error.',
      });
    }
  }
}
