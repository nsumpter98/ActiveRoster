// ErrorHandling middleware
import { Request, Response, NextFunction } from "express";

// error handler middleware
const ErrorHandler = (app: any) => {
  app.use((err: any, req: Request, res: Response, next: NextFunction) => {
    console.error(err.stack);
    res.status(500).send("Something broke!");
  });
};

export { ErrorHandler };
