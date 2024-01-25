import { Supplier } from "../entities/Supplier";

export interface SupplierRepository{
    getAll():Promise<Supplier[] | null>;
    createSupplier(
        idSupplier : string,
        name : string
    ): Promise<Supplier | null>
}