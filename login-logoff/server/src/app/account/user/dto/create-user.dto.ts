import { IsEmail, IsString, Length } from 'class-validator';

export class CreateUserDto {
  @Length(5)
  @IsString()
  userName: string;

  @IsEmail()
  email: string;

  @Length(5)
  @IsString()
  password: string;
}
