import {injectable, inject} from 'inversify';
import HttpStatusCodes from 'http-status-codes';

import { TYPES } from '../constants/types';
import { UserRepository } from '../repositories/User.repository';

export interface IUserService {
    getUsers(): any
}

@injectable()
export class UserService implements IUserService {

    constructor(@inject(TYPES.UserRepository) private userRepository: UserRepository) {}

    getUsers() {
        throw new Error("Method not implemented.");
    }

    
}