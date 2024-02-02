import { Request, Response } from "express";

import { DeleteSupplierUseCase } from "../../application/MethodsSupplier/DeleteSuppliersUseCase";

export class DeleteSuppliersController {
  constructor(readonly DeleteSupplierUseCase: DeleteSupplierUseCase) {}

  async run(req: Request, res: Response):Promise<void> {


    const id : number =parseInt(req.params. idSupplier)
    try {
      const supplier = await this.DeleteSupplierUseCase.run(id);
      console.log(supplier);
      if (supplier)
        res.status(200).send({
          status: "success",

        });
      else
        res.status(400).send({
          status: "error",
          msn: "Hubo un problema",
        });
    } catch (error) {
      res.status(204).send({
        status: "error",
        data: "Hubo un problema",
        msn: error,
      });
    }
  }
}
