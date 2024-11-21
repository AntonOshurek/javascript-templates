//ENTITYES
import { User } from '../../user/entities/user.entity';

export class ResponseRegistrationDto extends User {
  access_token: string;
}
