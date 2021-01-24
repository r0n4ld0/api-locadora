import { container } from 'tsyringe';
import { Request, Response } from 'express';
import { classToClass } from 'class-transformer';
import CreateMovieUseCase from './CreateMovieUseCase';

export default class CreateUserController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const { title, director, quantity } = request.body;

    const createMovie = container.resolve(CreateMovieUseCase);

    try {
      const movie = await createMovie.execute({ title, director, quantity });

      return response.status(201).json(classToClass(movie));
    } catch (err) {
      return response.status(400).json({
        message: err.message || 'Unexpected error.',
      });
    }
  }
}
