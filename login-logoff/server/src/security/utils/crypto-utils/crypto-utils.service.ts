import { Injectable } from '@nestjs/common';
//CRYPTO
import { genSaltSync, hash, compare } from 'bcrypt';

@Injectable()
export class CryptoUtilsService {
  async generateHash(password: string): Promise<string> {
    const salt = genSaltSync(10);
    const hashpass = await hash(password, salt);

    return hashpass;
  }

  async comparePasswords(pass1: string, pass2: string): Promise<boolean> {
    return await compare(pass1, pass2);
  }
}
