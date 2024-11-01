// init middlewares

import express, { Express } from "express";
import cors from "cors";
var { expressjwt: jwt } = require("express-jwt");
import jwks from "jwks-rsa";
import axios from "axios";

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

const authorizeUser = async (req: any, res: any, next: any) => {
  // get token from the request header
  const token = req.headers.authorization.split(" ")[1];

  // parse the token to json.
  const tokenData = JSON.parse(
    Buffer.from(token.split(".")[1], "base64").toString()
  );

  // get the audience from the token
  const { aud } = tokenData;

  const userUrl = aud[1];

  // reach out to the userUrl to get the user data
  const user = await axios.get(userUrl, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  console.log(user.data);

  next();
};

const Middlewares = (app: Express) => {
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(cors({ origin: "*" })); // @todo: change this to the actual domain before deploying
  app.use(authCheck);
  app.use(authorizeUser);
};

export { Middlewares };
