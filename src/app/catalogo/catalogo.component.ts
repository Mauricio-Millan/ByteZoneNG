import { Component, OnInit, inject } from '@angular/core';
import { ProductoserviciosService, Product } from '../services/productoservicios.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Importa FormsModule
import { ProductoItemComponent } from '../producto-item/producto-item.component';

@Component({
  selector: 'app-catalogo',
  imports: [CommonModule, FormsModule, ProductoItemComponent], // Incluye FormsModule aquí
  templateUrl: './catalogo.component.html',
  styleUrl: './catalogo.component.scss',
})
export class CatalogoComponent /* implements OnInit */ {
  productslist: Product[] = [];
  filtroProducto: string = '';
  filtroproductslist: Product[] = [];
  marcas: string[] = [];
  categorias: string[] = [];

  servicioproducto: ProductoserviciosService = inject(ProductoserviciosService);

  constructor() {
    this.servicioproducto.getAllProducts().then((productslist: Product[]) => {
      this.productslist = productslist;
      this.filtroproductslist = productslist;
      this.actualizarPaginacion();
      this.listarMarcas();
      this.listarCategorias();
    });
  }
  page: number = 1;
  pageSize: number = 9;
  totalPages: number = 1;

  // Calcula el número total de páginas cada vez que cambia la lista filtrada
  actualizarPaginacion() {
    this.totalPages = Math.ceil(this.filtroproductslist.length / this.pageSize);
  }

  // Devuelve los productos de la página actual
  get paginatedProducts() {
    const start = (this.page - 1) * this.pageSize;
    return this.filtroproductslist.slice(start, start + this.pageSize);
  }

  // Cambia de página y actualiza la vista
  cambiarPagina(nuevaPagina: number) {
    if (nuevaPagina < 1 || nuevaPagina > this.totalPages) return;
    this.page = nuevaPagina;
  }

  // Cuando se filtra, reinicia a la página 1 y actualiza la paginación
  filtroProductos(text: string) {
    if (!text) {
      this.filtroproductslist = this.productslist;
    } else {
      this.filtroproductslist = this.productslist.filter((producto) =>
        producto?.name.toLowerCase().includes(text.toLowerCase())
      );
    }
    this.page = 1;
    this.actualizarPaginacion();
  }

  filtrarPorMarca(marca: string) {
    if (!marca) {
      this.filtroproductslist = this.productslist;
    } else {
      this.filtroproductslist = this.productslist.filter((producto) =>
        producto?.brand.toLowerCase().includes(marca.toLowerCase())
      );
    }
    this.page = 1;
    this.actualizarPaginacion();
  }

  filtrarPorCategoria(categoria: string) {
    if (!categoria) {
      this.filtroproductslist = this.productslist;
    } else {
      this.filtroproductslist = this.productslist.filter((producto) =>
        producto?.categoria?.toLowerCase() === categoria.toLowerCase()
      );
    }
    this.page = 1;
    this.actualizarPaginacion();
  }

  // Método para listar todas las marcas únicas
  listarMarcas() {
    this.marcas = Array.from(new Set(this.productslist.map((p) => p.brand)));
  }

  // Método para listar todas las categorías únicas
  listarCategorias() {
    this.categorias = Array.from(new Set(this.productslist.map((p) => p.categoria)));
  }

  // Llama a actualizarPaginacion en ngOnInit o después de cargar productos
  ngOnInit() {
    this.actualizarPaginacion();
  }
}