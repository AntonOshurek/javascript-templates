import {
  HttpException,
  HttpStatus,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
//DB
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
//DTO
import { CreateUserDto } from './dto/create-user.dto';
//ENTITYES
import { User, UserDocument } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const createdUser = new this.userModel(createUserDto);

    let savedUser;

    try {
      savedUser = await createdUser.save();
    } catch (error) {
      throw new HttpException(
        `An error occurred while saving the user. Error message: ${error.message}`,
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }

    return savedUser.toObject();
  }

  async getMyUserData(userid: string): Promise<User> {
    try {
      const user = await this.userModel.findById(userid);

      if (!user) {
        throw new NotFoundException(`User with ID ${userid} not found`);
      }
      return user;
    } catch {
      throw new InternalServerErrorException('Failed to fetch user by id');
    }
  }
}
