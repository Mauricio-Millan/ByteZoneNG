import { Component, inject, OnInit } from '@angular/core';
import { ProductoserviciosService, user } from '../services/productoservicios.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [FormsModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  private productoService = inject(ProductoserviciosService);

  usuario: user = { id: 0, usuario: '', clave: '' };
  mensajeLogin: string = '';
  usuarioLogueado: string = '';

  ngOnInit() {
    this.usuarioLogueado = localStorage.getItem('usuarioLogueado') || '';
  }

  async login() {
    const resultado = await this.productoService.login(this.usuario);
    if (resultado && resultado.id) {
      this.mensajeLogin = '¡Login exitoso!';
      this.usuarioLogueado = resultado.usuario;
        localStorage.setItem('usuarioLogueado', this.usuarioLogueado);
      setTimeout(() => {
        this.mensajeLogin = '';
        // Opcional: cerrar modal con JS si usas Bootstrap
        const modal = document.getElementById('loginModal');
        if (modal) {
          // @ts-ignore
          (window as any).bootstrap.Modal.getOrCreateInstance(modal).hide();
        }
      }, 1000);
    } else {
      this.mensajeLogin = 'Usuario o contraseña incorrectos';
      this.usuarioLogueado = '';
      setTimeout(() => {
        this.mensajeLogin = '';
      }, 1000);
    }
  }
}
