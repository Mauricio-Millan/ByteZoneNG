import { Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { TiendasComponent } from './tiendas/tiendas.component';
import { ProductoFullComponent } from './producto-full/producto-full.component';
import { EquipoComponent } from './equipo/equipo.component';

export const routes: Routes = [
    {path: '', component: InicioComponent, title: 'Inicio'},
    {path: 'Catalogo', component : CatalogoComponent, title: 'Catalogo de Productos'},
    {path: 'Nosotros', component : NosotrosComponent, title: 'Nosotros'},
    {path: 'Tiendas', component : TiendasComponent, title: 'Nuestros Puntos de Venta'},
    {path: 'detalle/:id', component : ProductoFullComponent, title: 'Producto Full' },
    {path: 'Equipo', component : EquipoComponent, title: 'Equipo de Desarrollo' },
];
