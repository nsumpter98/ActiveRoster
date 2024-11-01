// init middlewares

import express, { Express } from "express";
import cors from "cors";
var { expressjwt: jwt } = require("express-jwt");
import jwks from "jwks-rsa";

import dotenv from "dotenv"; // not sure why dotenv is not working from the index.ts file. will investigate later
// @todo: investigate why dotenv is not working from the index.ts

dotenv.config();



const authCheck = jwt({
  secret: jwks.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: process.env.ISSUER_BASE_URL + ".well-known/jwks.json",
  }),
  audience: process.env.AUTH0_AUDIENCE,
  issuer: process.env.ISSUER_BASE_URL,
  algorithms: ["RS256"],
});

const Middlewares = (app: Express) => {
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(cors({ origin: "*" }));
  app.use(authCheck);
};

export { Middlewares };
