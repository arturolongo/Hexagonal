import { Books } from "../../domain/entities/Books";
import { BooksRepository } from "../../domain/interface/BooksRepository";
import { IEcryptService } from "../services/IEncryptService";


export class CreateBooksUseCase {

    constructor(readonly bookRepository: BooksRepository, readonly encryptPassword : IEcryptService){}
    async run(
        idBooks: number,
        name: string,
        description: string
    ): Promise<Books | null>{
    
    let pass = this.encryptPassword.encodePassword(name)
       
        try {
            const book = await this.bookRepository.createBook(
                idBooks,
                name,
                description
            );
            return book;
        } catch (error) {
            return null;
        }
    }
    
}