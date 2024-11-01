import express, { Express, Request, Response } from "express";
import { RegisterRoutes } from "./RegisterRoutes";
import { ErrorHandler } from "./ErrorHandler";
import { Middlewares } from "./Middlewares";



const app: Express = express();

// register middlewares
Middlewares(app);

// register routes
RegisterRoutes(app);

// register error handler
ErrorHandler(app);

const port = process.env.PORT || 3000;

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

const start = () => {
  app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
  });
};

export { start };
