import { Module } from '@nestjs/common';
import { RegisterResolver } from './registration.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { RegisterSchema } from './registration.schema';
import { RegisterService } from './registration.service';

@Module({
    imports: [MongooseModule.forFeature([{ name: 'Register', schema: RegisterSchema }])],
    providers: [RegisterResolver, RegisterService],
})
export class RegistrationModule {}
