import { type Request, type Response, type NextFunction } from "express";

export default function ErrorHandlingMiddleware(error: any, req: Request, res: Response, next: NextFunction) {
  
  console.log(error);
  // log implement 
  // sentry

  let code= error.code || 500
  let details = error.detail || error.details || null
  let message = error.message || "Internal Server error"

  res.status(code).json({
    // response code: 200
    data: details,
    message: message,
    meta: null,
  });
}