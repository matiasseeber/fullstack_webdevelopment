import express, { Application } from 'express';
import bodyParser from "body-parser";
import cors from "cors";
import compression from "compression";
import morgan from "morgan";
import * as dotenv from "dotenv";

dotenv.config();

process.env.ENVIRONMENT = process.env.ENVIRONMENT || "DEV";

const app: Application = express();

app.use(compression({
    filter: () => true,
    threshold: 0
}));
app.use(morgan("dev"));
app.enable('trust proxy');
app.disable('x-powered-by');
app.use(cors());
app.options('*', cors());

app.use(bodyParser.raw());
app.use(bodyParser.text());

app.use(bodyParser.json({
    limit: '10mb'
}));

app.use(bodyParser.urlencoded({
    limit: '10mb',
    extended: true
}));

app.set("secretKey", process.env.SECRET_KEY || "oxBRF5rgdYNC5VsB9r0Ahzw3Nu2h6bgPBir05PV0");

export default app;