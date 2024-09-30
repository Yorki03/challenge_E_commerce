import { Component, OnInit } from '@angular/core';
import { CarouselComponent } from '../../../../shared/components/carousel/carousel.component';
import { ButtonModule } from 'primeng/button';
import { CarouselModule } from 'primeng/carousel';
import { ShortDescriptionPipe } from '../../../../core/pipes/shortDescription.pipe';
import { FunctionGetCategorias } from '../../functions/getCategoria';
import { MessageService } from 'primeng/api';
import { Variables } from '../../utils/variables';
import { ProductosService } from '../../../../shared/service/productos.service';
import { FunctionGetAllProducto } from '../../functions/getAllProductos';
import { HttpClientModule } from '@angular/common/http';
import { FunctionGetProcuctoPorCategoria } from '../../functions/getProductForCategory';

@Component({
  selector: 'app-categorias',
  standalone: true,
  imports:[
    CarouselModule, 
    ButtonModule,
    ShortDescriptionPipe,
    CarouselComponent
  ],
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css'],
  providers:[MessageService,  HttpClientModule]
})
export class CategoriasComponent implements OnInit {

  variables = new Variables();
  responsiveOptions: any[] | undefined;

  constructor(
    private service: ProductosService,
    private messageService: MessageService
  ) { }

  ngOnInit() {
    this.getAllCategoria();
    

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

  getAllCategoria(){
    FunctionGetCategorias.getCategoria(
      this.service,
      this.variables, 
      this.messageService
    );
    
    FunctionGetAllProducto.getAllProduct(
      this.service,
      this.variables, 
      this.messageService
    );
  }

  categoria(category: string){
    console.log(category);
    
    FunctionGetProcuctoPorCategoria.get(
      this.service,
      this.variables,
      this.messageService,
      category
    );
  }

}
