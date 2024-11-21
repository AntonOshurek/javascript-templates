import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { IsString } from 'class-validator';
import { Types } from 'mongoose';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  @IsString()
  _id: Types.ObjectId;
}
