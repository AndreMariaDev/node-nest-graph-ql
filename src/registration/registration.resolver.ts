import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { RegisterService } from './registration.service';
import { RegisterType} from './dto/registration.dto';
import { RegisterInput } from './inputs/registration.inputs';

@Resolver()
export class RegisterResolver {
  constructor(private readonly registerService: RegisterService) {}

  @Query(() => String)
  async hello() {
    return 'hello';
  }

  @Query(() => [RegisterType])
  async register() {
    return this.registerService.findAll();
  }

  @Mutation(() => RegisterType)
  async createRegister(@Args('input') input: RegisterInput) {
    return this.registerService.create(input);
  }
}