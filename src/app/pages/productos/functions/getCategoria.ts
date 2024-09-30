import { MessageService } from "primeng/api";
import { ProductosService } from "../../../shared/service/productos.service";
import { Variables } from "../utils/variables";

export module FunctionGetCategorias{
    export function getCategoria(
        service: ProductosService,
        variables: Variables,
        messageService: MessageService
    ){
        service.getAllCategoris()
            .subscribe(
                (data)=>{
                    variables.categias.set(data);
                },
                (err)=>{
                    console.log(err);
                    messageService.add({ severity: 'error', summary: 'Error', detail: 'Ocurrio un error!!!!' });
                }
            );
    }
}