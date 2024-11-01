// initialize the app

import { start } from "./infra/web/ExpressApp";
import dotenv from "dotenv";


dotenv.config();

start();
