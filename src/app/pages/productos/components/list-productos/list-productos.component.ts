import { Component, OnInit } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { Variables } from '../../utils/variables';
import { MessageService } from 'primeng/api';
import { FunctionGetAllProducto } from '../../functions/getAllProductos';
import { ProductosService } from '../../../../shared/service/productos.service';
import { HttpClientModule } from '@angular/common/http';
import { ShortDescriptionPipe } from '../../../../core/pipes/shortDescription.pipe';
import { DialogService } from 'primeng/dynamicdialog';
import { ViewProductosComponent } from '../view-productos/view-productos.component';
import { ViewPreoductoDirective } from '../../../../core/directive/viewPreoducto.directive';
import { CarouselComponent } from '../../../../shared/components/carousel/carousel.component';
import { IProductos, Productos } from '../../models/productos';
import { CarritoService } from '../../../../shared/service/carrito.service';

@Component({
  selector: 'app-list-productos',
  standalone: true,
  imports:[
    CarouselModule, 
    ButtonModule,
    ShortDescriptionPipe,
    ViewPreoductoDirective,
    CarouselComponent
  ],
  templateUrl: './list-productos.component.html',
  styleUrls: ['./list-productos.component.css'],
  providers:[MessageService,  HttpClientModule, DialogService]
})
export class ListProductosComponent implements OnInit {

  variables = new Variables();
  responsiveOptions: any[] | undefined;

  constructor(
    private service: ProductosService,
    private messageService: MessageService,
    public dialogService: DialogService,
    private carritoService: CarritoService
  ) { }

  ngOnInit() {
    this.getAllProductos();

    
    this.responsiveOptions = [
     {
       breakpoint: '1024px',
       numVisible: 3,
       numScroll: 3
     },
     {
       breakpoint: '768px',
       numVisible: 2,
       numScroll: 2
     },
     {
       breakpoint: '560px',
       numVisible: 1,
       numScroll: 1
     }
    ];
  }

  getAllProductos(){
    FunctionGetAllProducto.getAllProduct(
      this.service,
      this.variables,
      this.messageService
    )
  }

  openView(data: any){
    const ref = this.dialogService.open(ViewProductosComponent, {
      header: 'Informacion del producto',
      width: '80%',
      height: '100%',
      data: data
    });
  }


  addProducto(product: Productos){
    let prodCart: IProductos = {...product, cantidad: 1}
    this.carritoService.addProductos(prodCart);
  }
}
