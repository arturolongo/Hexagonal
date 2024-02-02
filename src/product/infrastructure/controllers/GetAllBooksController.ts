import { Request, Response } from "express";

import { GetAllBooksUseCase } from "../../application/MethodsBooks/GetAllBooksUseCase";
export class GetAllBooksController {
  constructor(readonly getAllBooksUseCase: GetAllBooksUseCase) {}

  async run(req: Request, res: Response):Promise<void> {
    try {
      const books = await this.getAllBooksUseCase.run();
      console.log(books);
      if (books)
        res.status(200).send({
          status: "success",
          data: books.map((books: any) => {
            return {
              idBooks : books.idBooks,
              name: books.name,
              description : books.description
            };
          }),
        });
      else
        res.status(400).send({
          status: "error",
          msn: "Ocurrio algún problema",
        });
    } catch (error) {
      res.status(204).send({
        status: "error",
        data: "Ocurrio un error",
        msn: error,
      });
    }
  }
}
