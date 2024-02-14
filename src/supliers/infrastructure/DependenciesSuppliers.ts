import { CreateSupplierUseCase } from '../application/MethodsSupplier/CreateSupplierUseCase';
import { GetAllSupplierUseCase } from "../application/MethodsSupplier/GetAllSupplierUseCase";
import { CreateSupplierController } from "./controllers/CreateSupplierController";
import {GetAllSupplierController} from "./controllers/GetAllSuppliersController";

//Nuevvo metodo 
import { DeleteSupplierUseCase } from '../application/MethodsSupplier/DeleteSuppliersUseCase';
import { DeleteSuppliersController } from "./controllers/DeleteSupplierController";
import { MysqlSupplierRepository } from "./repository/MysqlSupplierRepository";
import { Broker } from './helpers/rabbitqm';

export const mysqlSupplierRepository = new MysqlSupplierRepository();
const broker = new Broker();
export const createSupplierUseCase = new CreateSupplierUseCase(
  mysqlSupplierRepository,broker
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