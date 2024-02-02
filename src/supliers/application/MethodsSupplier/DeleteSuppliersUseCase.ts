import { Supplier } from "../../domain/entities/Supplier";
import { SupplierRepository } from "../../domain/interface/SupplierRepository";

export class DeleteSupplierUseCase{
    constructor(readonly supplierRepository: SupplierRepository){}
    async run(
        idSupplier:number,
       
    ): Promise<Supplier | null>{
        try {
            const supplier = await this.supplierRepository.deleteSupplier(
                idSupplier,
                
            );
            return supplier;
        } catch (error) {
            return null;
        }
    }
}