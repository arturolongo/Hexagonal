import { IEcryptService } from "../../application/services/IEncryptService";
import bycript from 'bcrypt';
export class EncryptService implements IEcryptService{

    encodePassword(password:string): string {
        const pass = bycript.hashSync(password,10)
        return pass;
    }
    authPassword(word: string, passwordEncode:string): boolean {
        
        let result = bycript.compareSync(word,passwordEncode)
        return result;
    }
}