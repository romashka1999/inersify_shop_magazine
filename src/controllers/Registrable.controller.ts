import { Application } from 'express';

export interface IRegistrableController {
    registr(app: Application): void
}