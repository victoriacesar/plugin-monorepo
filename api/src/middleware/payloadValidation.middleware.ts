import { Request, Response, NextFunction } from 'express';
import { plainToInstance } from 'class-transformer';
import { validate } from 'class-validator';

declare module 'express-serve-static-core' {
  interface Request {
    dto?: any;
  }
}

export function validateDto(dtoClass: any) {
  return async (req: Request, res: Response, next: NextFunction) => {
    const dto = plainToInstance(dtoClass, req.body);

    const errors = await validate(dto);

    if (errors.length > 0) {
      res.status(400).json({
        error: 'Payload inválido',
        details: errors.map((err) => ({
          property: err.property,
          constraints: err.constraints,
        })),
      });
      return;
    }

    req.dto = dto;
    next();
  };
}
