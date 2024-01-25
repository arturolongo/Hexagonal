import { Books } from "../../domain/entities/Books";
import { BooksRepository } from "../../domain/interface/BooksRepository";


export class CreateBooksUseCase {
    constructor(readonly bookRepository: BooksRepository){}
    async run(
        idBooks: number,
        name: string,
        description: string
    ): Promise<Books | null>{
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