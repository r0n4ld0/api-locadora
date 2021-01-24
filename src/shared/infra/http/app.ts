import express, { Application, Request, Response, NextFunction } from 'express';
import 'reflect-metadata';
import '../../container/index';
import createConnection from '../typeorm/index';
import routes from './routes';

class App {
  public server: Application;

  constructor() {
    createConnection();
    this.server = express();
    this.middlewares();
    this.routes();
    this.exceptionHandler();
  }

  private middlewares(): void {
    this.server.use(express.json());
  }

  private routes(): void {
    this.server.use(routes);
  }

  private exceptionHandler(): void {
    this.server.use(
      (
        err: Error,
        request: Request,
        response: Response,
        _next: NextFunction,
      ) => {
        return response.status(500).json({
          message: 'Internal server error',
        });
      },
    );
  }
}
export default new App().server;
