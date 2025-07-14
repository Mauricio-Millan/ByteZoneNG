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
  categoria: string;
  descuento: number;
}
export interface user {
  id: number;
  usuario: string;
  clave: string;
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

  springurl ="http://localhost:8080/Bytezone/usuario";
  url="http://localhost:3000/products";
    
    async getAllProducts(): Promise<Product[]> {
      const data = await fetch(this.url);
      return (await data.json());
    }
    async getProductsbyID(id: number): Promise<Product | undefined> {
      const data = await fetch(`${this.url}/${ id}`);
      return (await data.json()) ?? {};
    }

    // Obtiene todas las categorías únicas de los productos
    async getCategorias(): Promise<string[]> {
      const productos = await this.getAllProducts();
      const categorias = productos.map(p => p.categoria);
      // Devuelve solo categorías únicas
      return Array.from(new Set(categorias));
    }

    // Obtiene todas las marcas únicas de los productos
    async getMarcas(): Promise<string[]> {
      const productos = await this.getAllProducts();
      const marcas = productos.map(p => p.brand);
      // Devuelve solo marcas únicas
      return Array.from(new Set(marcas));
    }
    async login (usuario: user): Promise<user | undefined> {
      const data = await fetch(`${this.springurl}/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(usuario)
      });
      return (await data.json()) ?? {};
    }

}
