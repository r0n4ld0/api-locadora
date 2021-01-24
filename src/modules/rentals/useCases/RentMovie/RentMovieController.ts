import { Request, Response } from 'express';
import { container } from 'tsyringe';
import RentMovieUseCase from './RentMovieUseCase';

export default class RentMovieController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const { email } = request.user;
    const { movie_id } = request.params;

    const rentMovie = container.resolve(RentMovieUseCase);

    try {
      await rentMovie.execute({ email, movie_id: Number(movie_id) });

      return response.status(201).json({ message: 'Movie rented' });
    } catch (err) {
      return response.status(400).json({
        message: err.message || 'Unexpected error.',
      });
    }
  }
}
