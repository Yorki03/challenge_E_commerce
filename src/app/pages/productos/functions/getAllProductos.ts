import { MessageService } from "primeng/api";
import { ProductosService } from "../../../shared/service/productos.service";
import { Variables } from "../utils/variables";

export module FunctionGetAllProducto{
    export function getAllProduct(
        service: ProductosService,
        variables: Variables,
        messageService: MessageService
    ){
        service.getAllProductos()
            .subscribe(
                ((data)=>{
                    if(data){
                        variables.productos.set(data);                        
                    }
                }),
                (err)=>{
                    messageService.add({ severity: 'error', summary: 'Error', detail: 'Ocurrio un error!!!!' });
                    console.log(err);
                    
                }
            )
    }

}
