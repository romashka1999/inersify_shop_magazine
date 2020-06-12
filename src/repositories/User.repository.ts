import { injectable } from 'inversify';
import { Repository, EntityRepository } from 'typeorm';
import HttpStatusCodes from 'http-status-codes';

import { TYPES } from '../constants/types';
import { User } from '../entities/User.entity';

export interface IUserRepository{
    getUsers(): any
}


@EntityRepository(User)
@injectable()
export class UserRepository extends Repository<User> implements IUserRepository{

    async getUsers() {
        
        throw new Error("Method not implemented.");
    }

    
}