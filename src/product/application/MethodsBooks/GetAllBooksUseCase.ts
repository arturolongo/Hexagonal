import { Books } from "../../domain/entities/Books";
import { BooksRepository } from "../../domain/interface/BooksRepository";

export class GetAllBooksUseCase{
    constructor (readonly booksRepository: BooksRepository){}
    async run(): Promise<Books[] | null >{
        try {
            const result = await this.booksRepository.getAll();
            console.log(result);
            return result;
        } catch (error) {
            return null;
        }

    }
}