import { Response, NextFunction, Request } from 'express';
import { ICustomError } from '../errors/CustomError';


const errorMiddleware = (
  error: ICustomError,
  _req: Request,
  res: Response,
  _next:NextFunction,
) => {
  const { statusCode = 500, message } = error;
  return res.status(statusCode).json({ message });
};

export default errorMiddleware;
