import { IProductos } from "../../pages/productos/models/productos";

export const calcularPrecio = (list: IProductos[] = [])=>{
    let total = 0.00;
    if(list.length > 0){
        list.forEach(prod =>{
            total += (prod.price * prod.cantidad);
        })
        return parseFloat(total.toFixed(2));
    }
    return 0.00;
}