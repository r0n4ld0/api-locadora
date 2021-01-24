import { Router } from 'express';
import RentMovieController from '../../../useCases/RentMovie/RentMovieController';
import ReturnMovieController from '../../../useCases/ReturnMovie/ReturnMovieController';
import ListRentalsController from '../../../useCases/ListRentals/ListRentalsController';

import ensureAuthenticated from '../../../../users/infra/http/middlewares/ensureAuthenticated';

const routes = Router();

const rentMovieController = new RentMovieController();
const returnMovieController = new ReturnMovieController();
const listRentalsController = new ListRentalsController();

routes.get('/rentals', ensureAuthenticated, listRentalsController.handle);

routes.post('/:movie_id/rent', ensureAuthenticated, rentMovieController.handle);
routes.post(
  '/:movie_id/return',
  ensureAuthenticated,
  returnMovieController.handle,
);

export default routes;
