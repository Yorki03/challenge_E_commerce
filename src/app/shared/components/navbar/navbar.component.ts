import { Component, OnInit } from '@angular/core';
import { TagModule } from 'primeng/tag';
import { CarritoService } from '../../service/carrito.service';
import { contarProductos } from '../../utils/contar';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports:[TagModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{

  total: number = 0;

  constructor(private carrito: CarritoService) { }

  ngOnInit(){
    this.carrito.getProducts().subscribe(product=>{
      this.total = contarProductos(product);
    })
    
    
  }

  

}
