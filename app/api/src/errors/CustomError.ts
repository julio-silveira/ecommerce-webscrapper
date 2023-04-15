export interface ICustomError extends Error {
  statusCode?: number
}

function CustomError(statusCode: number, message: string): ICustomError {
  return Object.assign(new Error(message), { statusCode });
}

export default CustomError;
