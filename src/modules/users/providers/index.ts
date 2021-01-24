import { container } from 'tsyringe';

import IHasProvider from './HashProvider/IHashProvider';
import BCryptHashProvider from './HashProvider/BCryptHashProvider';

container.registerSingleton<IHasProvider>('HashProvider', BCryptHashProvider);
