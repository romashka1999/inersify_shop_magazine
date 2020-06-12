import "reflect-metadata";
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import bodyParser from 'body-parser';
import container from "./config/inversify";
import { IRegistrableController } from "./controllers/Registrable.controller";
import { TYPES } from "./constants/types";

const app: express.Application = express();

app.use(morgan('dev'));
app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

const controllers = container.getAll<IRegistrableController>(TYPES.Controller);
controllers.forEach(ctr => ctr.registr(app));


app.listen(3000, () => {
    console.log('started on port 3000');
});