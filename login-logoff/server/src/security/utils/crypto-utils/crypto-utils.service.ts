import { Injectable } from '@nestjs/common';
//CRYPTO
import { genSaltSync, hash } from 'bcrypt';

@Injectable()
export class CryptoUtilsService {
  async generateHash(password: string): Promise<string> {
    const salt = genSaltSync(10);
    const hashpass = await hash(password, salt);

    return hashpass;
  }
}
