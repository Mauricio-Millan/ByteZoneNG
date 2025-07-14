import { Component, inject } from '@angular/core';
import { ProductoserviciosService, Product } from '../services/productoservicios.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductoItemComponent } from '../producto-item/producto-item.component';

@Component({
  selector: 'app-inicio',
  imports: [CommonModule, FormsModule, ProductoItemComponent],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.scss'
})
export class InicioComponent {
  productos: Product[] = [];
  productosPorSlide: Product[][] = [];
  private productoService = inject(ProductoserviciosService);

  async listarProductos() {
    const todos = await this.productoService.getAllProducts();
    this.productos = todos.filter(producto => producto.descuento > 5);

    // Agrupa los productos en arrays de 6
    this.productosPorSlide = [];
    for (let i = 0; i < this.productos.length; i += 5) {
      this.productosPorSlide.push(this.productos.slice(i, i + 5));
    }
  }

  constructor() {
    this.listarProductos();
    // Mueve el carrusel automáticamente cada segundo
    setInterval(() => {
      const carousel = document.querySelector('#carouselProductos');
      if (carousel) {
        // @ts-ignore
        (window as any).bootstrap.Carousel.getOrCreateInstance(carousel).next();
      }
    }, 3000);
  }
}
