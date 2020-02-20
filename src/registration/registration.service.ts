import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { RegisterInterface } from './interfaces/registration.interface';
import { RegisterInput } from './inputs/registration.inputs';

@Injectable()
export class RegisterService {
  constructor(@InjectModel('Register') private readonly registerModel: Model<RegisterInterface>) {}

  async create(registerDto: RegisterInput): Promise<RegisterInterface> {
    const createdCat = new this.registerModel(registerDto);
    return await createdCat.save();
  }

  async findAll(): Promise<RegisterInterface[]> {
    return await this.registerModel.find().exec();
  }
}