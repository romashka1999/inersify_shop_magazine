import "reflect-metadata";
import express, { Application, Request, Response, NextFunction } from 'express';
import morgan from 'morgan';
import cors from 'cors';
import bodyParser from 'body-parser';

import container from "./config/inversify";
import { IRegistrableController } from "./controllers/Registrable.controller";
import { TYPES } from "./constants/types";
import { connection } from "./config/database";

class App {

    app: Application;
    private static instance: App;

    public static getInstance(): App {
        if (!App.instance) {
            App.instance = new App();
        }
        return App.instance;
    }

    private constructor() {
        this.app = express();
        this.config();
        this.routes();
        this.errorHandler();
    }

    private async config() {
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(bodyParser.urlencoded({extended: false}));
        this.app.use(bodyParser.json());
        try {
            await connection;
        } catch (error) {
            console.log('-----------------------------------')
        }
    }

    private routes() {  // grabs the Controller from IoC container and registers all the endpoints
        const controllers = container.getAll<IRegistrableController>(TYPES.Controller);
        controllers.forEach(ctr => ctr.registr(this.app));
    }
    
    public start() {
        this.app.listen(process.env.PORT || 3000, ()=> {
            console.log("Server is running")
        });
    }

    private errorHandler(){
        this.app.use((err: any, req: Request, res: Response, next: NextFunction) => {
            res.status(err.statusCode).json(err).send();
        });
    }
}

App.getInstance().start();