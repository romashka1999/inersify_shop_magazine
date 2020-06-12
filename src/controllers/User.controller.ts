import { Application, Request, Response, NextFunction } from 'express';
import { injectable, inject } from 'inversify';
import HttpStatusCodes from 'http-status-codes';

import { TYPES } from '../constants/types';
import { IRegistrableController } from './Registrable.controller';
import { UserService } from '../services/User.service';

@injectable()
export class UserController implements IRegistrableController {

    constructor(
        @inject(TYPES.UserService) private userService: UserService) {}

    registr(app: Application): void {
        app.route('/users')
            .get(async (req: Request, res: Response, next: NextFunction) => {
                res.send('hello');
            })
    }
    
}
