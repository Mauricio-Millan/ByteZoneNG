import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
 import { map } from 'rxjs/operators';
import { apiServer } from '../apiServer';


export interface Product {
  name: string;
  description: string;
  brand: string;
  price: number;
  image_url: string;
}


@Injectable({
  providedIn: 'root'
})

export class ProductoserviciosService {

  private apiUrl: string = apiServer.serverURL;
  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<{ products: Product[] }>(this.apiUrl).pipe(
      map(response => response.products) // Extrae solo el array de productos
    );
  }
}
