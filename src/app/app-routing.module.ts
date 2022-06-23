import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ElsalvadorComponent } from './elsalvador/elsalvador.component';
import { ColombiaComponent } from './colombia/colombia.component';
import { HondurasComponent } from './honduras/honduras.component';
import { CostaricaComponent } from './costarica/costarica.component';
import { RpComponent } from './rp/rp.component';
import { GuatemalaComponent } from './guatemala/guatemala.component';

import {IvyCarouselModule} from 'angular-responsive-carousel';
import { ProductosComponent } from './productos/productos.component';

import {NgxPaginationModule} from 'ngx-pagination';
import { DetalleproductComponent } from './detalleproduct/detalleproduct.component';
import { CarritoComponent } from './carrito/carrito.component';
import { MenuesComponent } from './menues/menues.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';

const routes: Routes = [
  { 
    path: '', 
    redirectTo: 'blank', 
    pathMatch: 'full',
  },
  { 
    path: 'elsalvador/:refrescar', 
    component:ElsalvadorComponent
  },
  { path: 'honduras', component: HondurasComponent },
  { path: 'colombia', component: ColombiaComponent },
  { path: 'blank', component: CostaricaComponent },
  { path: 'guatemala', component: GuatemalaComponent },
  { path: 'honduras', component: HondurasComponent },
  { path: 'rd/:refrescar', component: RpComponent },
  { path: 'elsalvador/product/:refrescar', component: ProductosComponent },
  { path: 'elsalvador/detalle/:id/:refrescar', component: DetalleproductComponent },
  { path: 'elsalvador/carrito', component: CarritoComponent },
  { path: 'logines/:refrescar', component: LoginComponent },
  { path: 'registro/:refrescar', component: RegistroComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true, initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
