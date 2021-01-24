import { Router } from 'express';
import CreateMovieController from '../../../useCases/CreateMovie/CreateMovieController';
import ListMoviesAvailableController from '../../../useCases/ListMoviesAvailable/ListMoviesAvailableController';
import GetMoviesByTitleController from '../../../useCases/GetMoviesByTitle/GetMoviesByTitleController';

import ensureAuthenticated from '../../../../users/infra/http/middlewares/ensureAuthenticated';

const routes = Router();

const createMovieController = new CreateMovieController();
const getMoviesAvailable = new ListMoviesAvailableController();
const getMoviesByTitleUseCase = new GetMoviesByTitleController();

routes.post('/', ensureAuthenticated, createMovieController.handle);
routes.get('/', getMoviesAvailable.handle);
routes.get('/search', getMoviesByTitleUseCase.handle);

export default routes;
