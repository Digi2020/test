import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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


@NgModule({
  declarations: [
    AppComponent,
    ElsalvadorComponent,
    ColombiaComponent,
    HondurasComponent,
    CostaricaComponent,
    RpComponent,
    GuatemalaComponent,
    ProductosComponent,
    DetalleproductComponent,
    CarritoComponent,
    MenuesComponent,
    LoginComponent,
    RegistroComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    NgxPaginationModule,
    IvyCarouselModule/* ,
    RouterModule.forRoot([
    { path: '', redirectTo: 'elsalvador/_', pathMatch: 'full' },
    { path: 'elsalvador/:refrescar', component: ElsalvadorComponent },
    { path: 'colombia', component: ColombiaComponent },
    { path: 'costarica', component: CostaricaComponent },
    { path: 'guatemala', component: GuatemalaComponent },
    { path: 'honduras', component: HondurasComponent },
    { path: 'rd/:refrescar', component: RpComponent },
    { path: 'elsalvador/product/:refrescar', component: ProductosComponent },
    { path: 'elsalvador/detalle/:id/:refrescar', component: DetalleproductComponent },
    { path: 'elsalvador/carrito', component: CarritoComponent },
    { path: 'logines/:refrescar', component: LoginComponent },
    { path: 'registro/:refrescar', component: RegistroComponent }
], { useHash: true, initialNavigation: 'enabled' }) */
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
