import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './entities/user.entity';
import { Model } from 'mongoose';

@Injectable()
export class UserQueryService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async isUserExistByEmail(email: string): Promise<boolean> {
    const exists = await this.userModel.exists({ email });
    return !!exists;
  }

  // async getUserByEmail(email: string): Promise<UserDocument | null> {
  //   return this.userModel.findOne({ email }).exec();
  // }

  // async getUserByEmailAndId(
  //   id: string,
  //   email: string,
  // ): Promise<UserDocument | null> {
  //   return this.userModel.findOne({ _id: id, email }).exec();
  // }

  async getUserByEmailWithPassword(
    email: string,
  ): Promise<UserDocument | null> {
    return this.userModel.findOne({ email }).select('+password').exec();
  }
}
