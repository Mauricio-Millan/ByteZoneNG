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
  productslist:Product [] = [];
  filtroProducto: string = ''; 
  filtroproductslist: Product[] = [];
    marcas: { nombre: string, valor: string }[] = [
    { nombre: 'MSI', valor: 'msi' },
    { nombre: 'AMD', valor: 'amd' },
    { nombre: 'Samsung', valor: 'Samsung' },
        { nombre: 'Asus', valor: 'Asus' },
            { nombre: 'Corsair', valor: 'Corsair' }
  ];


  servicioproducto: ProductoserviciosService = inject(ProductoserviciosService);
  constructor () {
    
    this.servicioproducto.getAllProducts().then((productslist: Product[]) => {
      this.productslist = productslist;
      this.filtroproductslist = productslist;})

/* 
  constructor(private ProductoserviciosService: ProductoserviciosService) {}

  ngOnInit() {
    this.ProductoserviciosService.getProducts().subscribe({
      next: (data) => {
        this.products = data;
        console.log(this.products);
      },
      error: (err) => console.error('Error al cargar productos', err)
    });
  }
    */
}
  filtroProductos(text: string) {
    if (!text) {
      this.filtroproductslist = this.productslist;
      return;
    }
    this.filtroproductslist = this.productslist.filter((producto) =>
      producto?.name.toLowerCase().includes(text.toLowerCase())
  )
  }
    // Método para manejar la selección de una marca
  filtrarPorMarca(marca: string) {
        if (!marca) {
      this.filtroproductslist = this.productslist;
      return;
    }
    this.filtroproductslist = this.productslist.filter((producto) =>
      producto?.brand.toLowerCase().includes(marca.toLowerCase())
  )
    // Aquí puedes implementar la lógica para filtrar productos por marca
  }
}