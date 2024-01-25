import { query } from "../../../database/mysql";
import { Books } from "../../domain/entities/Books";
import { BooksRepository } from "../../domain/interface/BooksRepository";

export class MysqlBooksRepository implements BooksRepository {
    async getAll(): Promise<Books[] | null> {
        const sql = "SELECT * FROM books";
        try {
            const [data]: any = await query(sql, []);
            const dataBooks = Object.values(JSON.parse(JSON.stringify(data)));
            return dataBooks.map(
                (book: any) =>
                    new Books(
                        book.idBooks,
                        book.name,
                        book.description
                    )
            );
        } catch (error) {
            return null;
        }
    }
    async createBook(
idBooks: number, 
name: string,
description: string): Promise<Books | null> 
    {
        const sql = "INSERT INTO books (idBooks,name,description) VALUES (11,?,?)";
        const params : any[] = [idBooks,name,description];
        try {
            const [result]: any = await query(sql , params);
            return new Books(result.idBooks,name,description )
        } catch (error) {
            return null;
        }
    }
}