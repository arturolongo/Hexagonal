import { Books } from "../entities/Books";

export interface BooksRepository {
    getAll():Promise<Books[] | null>;
    createBook(
        idBooks : number,
        name :string,
        description : string
    ):Promise<Books | null>
}