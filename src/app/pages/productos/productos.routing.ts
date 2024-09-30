import { Routes } from '@angular/router';
import { ListProductosComponent } from './components/list-productos/list-productos.component';
import { CategoriasComponent } from './components/categorias/categorias.component';
import { ListProductoCarritoComponent } from '../carrito/components/list-producto-carrito/list-producto-carrito.component';
import { LoguinComponent } from '../../auth/loguin/loguin.component';
import { RegisterComponent } from '../../auth/register/register.component';

export const PRODUCT_ROUTES: Routes = [
  { path: '', component: ListProductosComponent },
  { path: 'categorias', component: CategoriasComponent},
  { path: 'carrito', component: ListProductoCarritoComponent },
  { path: 'loguin', component: LoguinComponent },
  {path: 'registrarse', component: RegisterComponent},
  {path: '**', redirectTo: ''}
];


