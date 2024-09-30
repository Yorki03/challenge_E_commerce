import { Component, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CarritoService } from '../../../../shared/service/carrito.service';
import { IProductos } from '../../../productos/models/productos';
import { calcularPrecio } from '../../../../shared/utils/calcularPrecio';
import { DataViewModule } from 'primeng/dataview';
import { TagModule } from 'primeng/tag';
import { CommonModule } from '@angular/common'

@Component({
  selector: 'app-list-producto-carrito',
  standalone: true,
  imports:[ButtonModule, DataViewModule, ButtonModule, TagModule, CommonModule],
  templateUrl: './list-producto-carrito.component.html',
  styleUrls: ['./list-producto-carrito.component.css']
})
export class ListProductoCarritoComponent implements OnInit {

  products: IProductos[] = [];
  totalPrecio: number = 0.00;

  constructor(private carrito: CarritoService) { }

  ngOnInit() {
    this.carrito.getProducts().subscribe(product=>{
      this.products = product;
      this.totalPrecio = calcularPrecio(this.products)
    });
  }

  addOne(product: IProductos){
    this.carrito.addProductos(product)
  }

  desmOne(id: number){
    this.carrito.deleteProductos(id);
  }

  deleteProd(id: number){
    this.carrito.deleteProductos(id);
  }

  trashPorduct(id: number){
    this.carrito.deleteProducto(id)
  }

  deleteAll(){
    this.carrito.deleteAllProductos();
  }

}
