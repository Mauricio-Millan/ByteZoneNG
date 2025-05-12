import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../services/productoservicios.service';

@Component({
  selector: 'app-producto-item',
  standalone: true, // Marca el componente como independiente
  imports: [CommonModule], // Importa CommonModule si es necesario
  templateUrl: './producto-item.component.html',
  styleUrl: './producto-item.component.scss'
})
export class ProductoItemComponent implements OnInit {
  @Input() producto!: Product; // Define la propiedad producto como obligatoria
  @Input() filtroproducto: string = ''; // Define la propiedad filtroproducto como opcional
  ngOnInit(): void {
    console.log('Producto recibido:', this.producto);
  }
}
