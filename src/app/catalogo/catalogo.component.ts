import { Component, OnInit } from '@angular/core';
import { ProductoserviciosService, Product } from '../services/productoservicios.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Importa FormsModule
import { ProductoItemComponent } from '../producto-item/producto-item.component';

@Component({
  selector: 'app-catalogo',
  imports: [CommonModule, FormsModule, ProductoItemComponent], // Incluye FormsModule aquí
  templateUrl: './catalogo.component.html',
  styleUrl: './catalogo.component.scss',
  standalone: true
})
export class CatalogoComponent implements OnInit {
  products: Product[] = [];
  filtroProducto: string = ''; // Asegúrate de que esta propiedad exista y esté inicializada

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
}
