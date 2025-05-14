import { Injectable } from '@angular/core';
import { apiServer } from '../apiServer';


export interface Product {
  id: number;
  name: string;
  description: string;
  brand: string;
  price: number;
  image_url: string;
  info: string;
}


@Injectable({
  providedIn: 'root'
})

export class ProductoserviciosService {

  /*
  private apiUrl: string = apiServer.serverURL;
  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<{ products: Product[] }>(this.apiUrl).pipe(
      map(response => response.products) // Extrae solo el array de productos
    );
  }
    */

  constructor() { }

  url="http://localhost:3000/products";
    async getAllProducts(): Promise<Product[]> {
      const data = await fetch(this.url);
      return (await data.json());
    }
    async getProductsbyID(id: number): Promise<Product | undefined> {
      const data = await fetch(`${this.url}/${ id}`);
      return (await data.json()) ?? {};
    }

}
