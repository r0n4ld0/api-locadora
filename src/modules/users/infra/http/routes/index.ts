import { Router } from 'express';
import CreateUserController from '../../../useCases/CreateUser/CreateUserController';
import LoginController from '../../../useCases/Login/LoginController';
import LogoutController from '../../../useCases/Logout/LogoutController';

import ensureAuthenticated from '../middlewares/ensureAuthenticated';

const routes = Router();

const createUserController = new CreateUserController();
const loginController = new LoginController();
const logoutController = new LogoutController();

routes.post('/', createUserController.handle);
routes.post('/login', loginController.handle);

routes.post('/logout', ensureAuthenticated, logoutController.handle);

export default routes;
