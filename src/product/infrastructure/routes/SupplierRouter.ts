import express from "express";

import { createSupplierController } from "../DependenciesSuppliers";
import { getAllSupplierController } from "../DependenciesSuppliers";

export const supplierRouter = express.Router();

supplierRouter.get(
  "/",
  getAllSupplierController.run.bind(getAllSupplierController)
);

supplierRouter.post(
  "/",
  createSupplierController.run.bind(createSupplierController)
);
