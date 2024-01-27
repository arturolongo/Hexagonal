import { Supplier } from "../../domain/entities/Supplier";
import { SupplierRepository } from "../../domain/interface/SupplierRepository";

export class CreateSupplierUseCase{
    constructor(readonly supplierRepository: SupplierRepository){}
    async run(
        idSupplier:number,
        name:string
    ): Promise<Supplier | null>{
        try {
            const supplier = await this.supplierRepository.createSupplier(
                idSupplier,
                name
            );
            return supplier;
        } catch (error) {
            return null;
        }
    }
}