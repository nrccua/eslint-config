import { NestEntity, NestInput } from './nest.entity';

export class NestService {
  // eslint-disable-next-line class-methods-use-this
  serviceCall(input: NestInput): NestEntity {
    return { ...input };
  }
}
