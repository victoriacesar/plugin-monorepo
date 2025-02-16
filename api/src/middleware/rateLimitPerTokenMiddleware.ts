import { Request, Response, NextFunction } from 'express';
import { FirebaseRepository } from '../repository/firebase-repository';

const repository = new FirebaseRepository();

export const rateLimitPerTokenMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.token;
  const tenMinutes = 10 * 60 * 1000;

  try {
    const recentRequests = await repository.getRecentRequests(
      token as string,
      tenMinutes
    );

    if (recentRequests && Object.keys(recentRequests).length >= 5) {
      res.status(429).json({
        error: 'Limite de requisições excedido. Tente novamente mais tarde.',
      });
      return;
    }

    next();
  } catch (error) {
    res.status(500).json({ error: 'Erro ao verificar limite de requisições' });
  }
};
