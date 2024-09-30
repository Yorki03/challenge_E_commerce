import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Productos } from '../../pages/productos/models/productos';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  private baseUrl = `${environment.apiGateway}/products`;

  constructor(private http: HttpClient) {}

  getAllProductos():Observable<Productos[]>{
    return this.http.get<any>(`${this.baseUrl}`).pipe(
      map((res)=> res.map((product: any)=> new Productos(product)))
    );
  }

  getOneProducto(id:any):Observable<Productos>{
    return this.http.get<any>(`${this.baseUrl}/${id}`).pipe(
      map((res)=> res.map((product: any)=> new Productos(product)))
    );
  }

  getAllCategoris():Observable<any>{
    return this.http.get<any>(`${this.baseUrl}/categories`);
  }

  getProductoPorCategoria(categoria: string):Observable<Productos[]>{
    return this.http.get<any>(`${this.baseUrl}/category/${categoria}`)
  }

}
