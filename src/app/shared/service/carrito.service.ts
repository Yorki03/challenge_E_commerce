import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IProductos } from '../../pages/productos/models/productos';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  
  private cart$ = new BehaviorSubject<IProductos[]>([]);

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    if( (isPlatformBrowser(this.platformId))){
      let productosStorange = localStorage.getItem('productos');
      if(productosStorange){
        this.cart$.next(JSON.parse(productosStorange));
      }
    }   
   }

  

  getProducts(){
    return this.cart$.asObservable();
  }

  private setProducts(product: IProductos[]){
    this.cart$.next([...product]);
    if( (isPlatformBrowser(this.platformId))){
      localStorage.setItem('productos', JSON.stringify(product));
    }
    
  }

  addProductos(product: IProductos){
    let productCart = this.cart$.getValue();
    let prod = productCart.find(prod=> prod.id === product.id)
    if(prod){
      prod.cantidad += 1;
      this.setProducts([...productCart])
    }else{
      this.setProducts([...productCart, product]);
    }
    
  }

  deleteProductos(id: number){
    let prods = this.cart$.getValue();
    let prod = prods.find(prod => prod.id === id);
    prod!.cantidad -= 1;
    if(prod?.cantidad === 0){
      prod!.cantidad = 1;
    }
    this.setProducts([...prods]);
  }

  deleteProducto(id: number){
    let product = this.cart$.getValue().filter(prod => prod.id !== id);
    this.setProducts([...product]);
  }

  deleteAllProductos(){
    this.setProducts([])
  }

}
