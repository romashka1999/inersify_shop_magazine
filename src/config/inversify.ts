import { Container, decorate, injectable } from 'inversify';
import { Repository } from 'typeorm';

import { TYPES } from '../constants/types';
import { UserController } from '../controllers/User.controller';
import { IRegistrableController } from '../controllers/Registrable.controller';
import { UserService, IUserService } from '../services/User.service';
import { IUserRepository, UserRepository } from '../repositories/User.repository';

const container = new Container();

decorate(injectable(), Repository);

container.bind<IRegistrableController>(TYPES.Controller).to(UserController);
container.bind<IUserService>(TYPES.UserService).to(UserService);
container.bind<IUserRepository>(TYPES.UserRepository).to(UserRepository);

export default container;