import { Tokens } from 'src/security/utils/jwt-utils/model';
import { User } from '../../user/entities/user.entity';

export class ResponseLoginDto {
  user: User;
  tokens: Tokens;
}
