import { IProductos } from "../../pages/productos/models/productos";

export const contarProductos = (list: IProductos[]=[])=>{
    let total=0;
    if(list.length > 0){
        list.forEach(prod=>{
            total += prod.cantidad
        })
        return total
    }
    return 0;
}