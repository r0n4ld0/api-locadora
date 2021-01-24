import { verify } from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';

import authConfig from '../../../../../config/auth';

interface ITokenPayload {
  iat: number;
  exp: number;
  sub: string;
}

export default function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction,
): void {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    response.status(401).json({
      message: 'Token is missing.',
    });
  }
  if (authHeader) {
    const [, token] = authHeader.split(' ');

    try {
      const decodedtoken = verify(token, authConfig.jwt.secret);

      const { sub } = decodedtoken as ITokenPayload;

      request.user = { email: sub };

      next();
    } catch (err) {
      response.status(401).json({
        message: 'Invalid token.',
      });
    }
  }
}
