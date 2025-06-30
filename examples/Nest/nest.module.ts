import { NestResolver } from './nest.resolver';
import { NestService } from './nest.service';

export class NestModule {
  providers?: [NestService, NestResolver];
}
