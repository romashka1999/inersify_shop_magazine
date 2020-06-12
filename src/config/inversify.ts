import { Container } from 'inversify';

import { TYPES } from '../constants/types';
import { UserController } from '../controllers/User.controller';
import { IRegistrableController } from '../controllers/Registrable.controller';

const container = new Container();

container.bind<IRegistrableController>(TYPES.Controller).to(UserController);

export default container;