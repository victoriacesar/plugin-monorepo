import { NextFunction, Request, Response } from 'express';

declare module 'express-serve-static-core' {
  interface Request {
    token?: string;
  }
}

const extractToken = (authHeader: string | undefined): string | null => {
  if (!authHeader || !authHeader.startsWith('Bearer ')) return null;
  return authHeader.split(' ')[1];
};

const isValidToken = (token: string | null, validTokens: string[]): boolean => {
  return !!token && validTokens.includes(token);
};

export const authMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers['authorization'];
  const token = extractToken(authHeader);

  const validTokens = [process.env.TOKEN_1, process.env.TOKEN_2] as string[];

  if (!isValidToken(token, validTokens)) {
    res.status(403).json({ error: 'Acesso negado' });
    return;
  }

  req.token = token as string;
  next();
};
