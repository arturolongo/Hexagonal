import { json } from "stream/consumers";
import { Supplier } from "../../domain/entities/Supplier";
import { SupplierRepository } from "../../domain/interface/SupplierRepository";
import { Broker } from "../../infrastructure/helpers/rabbitqm";

export class CreateSupplierUseCase{
    constructor(
        readonly supplierRepository: SupplierRepository
        ,readonly broker:Broker
    ) {}
    async run(
        idSupplier:number,
        name:string,
       
    ): Promise<Supplier | null>{
        try {
            const supplier = await this.supplierRepository.createSupplier(
                idSupplier,
                name,
                
            );
            if(supplier){
                const message = JSON.stringify({id:idSupplier, name: supplier.name});
                await this.broker.sendMessage(message);
            }
            return supplier;
        } catch (error) {
            return null;
        }
    }
}