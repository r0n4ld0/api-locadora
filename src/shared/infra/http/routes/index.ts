import { Router } from 'express';
import userRouter from '../../../../modules/users/infra/http/routes';
import movieRouter from '../../../../modules/movies/infra/http/routes';
import rentRouter from '../../../../modules/rentals/infra/http/routes';

const routes = Router();

routes.use('/users', userRouter);
routes.use('/movies', movieRouter);
routes.use('/movies', rentRouter);

export default routes;
