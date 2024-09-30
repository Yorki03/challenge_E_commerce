import { MessageService } from "primeng/api";
import { Variables } from "../utils/variables";
import { ProductosService } from "../../../shared/service/productos.service";

export module FunctionGetProcuctoPorCategoria{
    export function get(
        service: ProductosService,
        variables: Variables,
        messageService: MessageService,
        categoria: any
    ){
        service.getProductoPorCategoria(categoria)
            .subscribe(
                ((data)=>{
                    if(data){
                        variables.productosCategoria.set(data);                        
                    }
                }),
                (err)=>{
                    messageService.add({ severity: 'error', summary: 'Error', detail: 'Ocurrio un error!!!!' });
                    console.log(err);
                    
                }
            )

    }
}