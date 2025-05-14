import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, ProductoserviciosService } from '../services/productoservicios.service';

@Component({
  selector: 'app-producto-full',
  imports: [ CommonModule],
  templateUrl: './producto-full.component.html',
  styleUrl: './producto-full.component.scss'
})
export class ProductoFullComponent {
 route: ActivatedRoute = inject(ActivatedRoute);
 productoservicio = inject(ProductoserviciosService);
 
 producto: Product | undefined;
 constructor  () {
  /*
    const productoId = Number(this.route.snapshot.paramMap.get('id'));
    this.producto = this.productoservicio.getProductsbyID(productoId);
    */
   const productoId = parseInt(this.route.snapshot.params['id'], 10);
   this.productoservicio.getProductsbyID(productoId).then((producto) => {
    this.producto = producto;
 });

}
}