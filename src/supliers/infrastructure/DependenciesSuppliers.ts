import { CreateSupplierUseCase } from '../application/MethodsSupplier/CreateSupplierUseCase';
import { GetAllSupplierUseCase } from "../application/MethodsSupplier/GetAllSupplierUseCase";
import { CreateSupplierController } from "./controllers/CreateSupplierController";
import {GetAllSupplierController} from "./controllers/GetAllSuppliersController";

//Nuevvo metodo 
import { DeleteSupplierUseCase } from '../application/MethodsSupplier/DeleteSuppliersUseCase';
import { DeleteSuppliersController } from "./controllers/DeleteSupplierController";
import { MysqlSupplierRepository } from "./repository/MysqlSupplierRepository";

export const mysqlSupplierRepository = new MysqlSupplierRepository();

export const createSupplierUseCase = new CreateSupplierUseCase(
  mysqlSupplierRepository
);

export const getAllUseCase = new GetAllSupplierUseCase(mysqlSupplierRepository);

export const createSupplierController = new CreateSupplierController(
  createSupplierUseCase
);

export const getAllSupplierController = new GetAllSupplierController(
  getAllUseCase
);
export const DeleteSuppliersUseCase = new DeleteSupplierUseCase(
  mysqlSupplierRepository
)
export const deleteSuppliersController = new DeleteSuppliersController (
  DeleteSuppliersUseCase
)