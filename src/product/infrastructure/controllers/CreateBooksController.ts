import { Request,Response } from "express";
import { CreateBooksUseCase } from "../../application/MethodsBooks/CreateBooksUseCase";

export class CreateBooksController{
    constructor(readonly createBooksUseCase:CreateBooksUseCase){}
    async run (req: Request, res: Response){
        const data = req.body;
        try {
            const book = await this.createBooksUseCase.run(
                data.idBooks,
                data.name,
                data.description
            );
            if (book)
            res.status(201).send({

                data:{
                    idBooks : book?.idBooks,
                    name: book?.name,
                    description: book?.description
                },
        });
        else
        res.status(204).send({
         status:"error",
         data: "no fue posible añadir el registro"
    })
        } catch (error) {
            res.status(204).send({
                status:"error",
                data:"ocurrio un error",
                messagge: error,
            })
        }
    }

}