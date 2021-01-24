import { Request, Response } from 'express';
import { container } from 'tsyringe';
import ReturnMovieUseCase from './ReturnMovieUseCase';

export default class ReturnMovieController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const { email } = request.user;
    const { movie_id } = request.params;

    const renturnMovie = container.resolve(ReturnMovieUseCase);

    try {
      await renturnMovie.execute({ email, movie_id: Number(movie_id) });

      return response.status(200).json({ message: 'returned movie' });
    } catch (err) {
      return response.status(400).json({
        message: err.message || 'Unexpected error.',
      });
    }
  }
}
