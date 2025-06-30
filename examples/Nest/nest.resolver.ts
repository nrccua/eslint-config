/* eslint-disable @typescript-eslint/no-unused-vars */
import { NestEntity, NestInput } from './nest.entity';
import { NestService } from './nest.service';

export class NestResolver {
  // eslint-disable-next-line no-empty-function
  constructor(private nestService: NestService) {}

  standardizeAddress(input: NestInput): NestEntity {
    const result = this.nestService.serviceCall(input);

    return result;
  }
}
