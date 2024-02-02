import { Request, Response } from "express";
import { CreateSupplierUseCase } from "../../application/MethodsSupplier/CreateSupplierUseCase";

export class CreateSupplierController {
  constructor(readonly createSupplierUseCase: CreateSupplierUseCase) {}

  async run(req: Request, res: Response):Promise<void> {
    const data = req.body;
    try {
      const supplier = await this.createSupplierUseCase.run(
        data.idSupplier,
        data.name
      );

      if (supplier)
        res.status(201).send({
          status: "success",
          data: {
            idSupplier: supplier?.idSupplier,
            name:supplier?.name
        
          },
        });
      else
        res.status(204).send({
          status: "error",
          data: "NO fue posible agregar el registro",
        });
    } catch (error) {
      res.status(204).send({
        status: "error",
        data: "Ocurrio un error",
        mesagges: error,
      });
    }
  }
}
