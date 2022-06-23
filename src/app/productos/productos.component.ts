import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { producto,categorias,subcategorias } from '../bdproducto.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})

/* export let prueba =[
  {
    "nombre":"hola"
  },
  {
    "nombre":"hola2"
  }
]; */

export class ProductosComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) { }


   modal = document.getElementById("myModal");
   mostrar;
   cantidad=1;
   preciou=0;
   total=0;
abrirmodal(){
  this.mostrar='ocultar';
}
cerrarmodal(){
  this.mostrar='';
}


precio(p)
{
  this.preciou=p;
  this.totalfinal(this.preciou,this.cantidad)
}

resta(){
  if(this.cantidad==0)
  {}
  else{
    this.cantidad=this.cantidad-1;
    this.totalfinal(this.preciou,this.cantidad)
  }
}
suma(){ this.cantidad=this.cantidad+2;
        this.totalfinal(this.preciou,this.cantidad)
      }

      totalfinal(precio,cantidad){

        this.total=precio*cantidad;
        this.total=Number(this.total.toFixed(2));
      }
  public numero:string;
  public numerodebanner:number;
  public numerodebanner2:number;
  private sub: any;
  public paramTxt: string;
  public categoria:string;
  pages: number = 1;
    producto = producto;
    categorias = categorias;
    subcategorias = subcategorias;

 newarray;
 subcategoriasfiltro;

 Scategpria2(f)
 {
  this.categoria=f;
  this.newarray = this.producto.filter( productos => {
    return productos.categoria == f;
  });
 }

 Scategpria(w)
 {
  this.categoria=w;
  this.subcategoriasfiltro = this.subcategorias.filter( subcategoria => {
   return subcategoria.categoria == w;
 });
 }
  categpria(e)
  {
    this.categoria=e;
       this.newarray = this.producto.filter( productos => {
        return productos.categoria == e;
      });
  
  }
  ngOnInit(): void {

    window.scrollTo(0, 0);

    this.categoria="Ginebra";
       this.newarray = this.producto.filter( productos => {
    return productos.categoria == this.categoria;
      });

    this.sub = this.route.params.subscribe(params => {
      
      this.paramTxt = params['refrescar'];
      });
     
      
      if(this.paramTxt=='.')
      {
        
        setTimeout(function(){
          window.scrollTo(0, 0);
       }, 600);
      }
      else{
        window.location.href = "#/elsalvador/product/.";
        /* window.location.reload(); */

     
          window.location.reload();
      
       
      }
      
     
   
      
    var x = window.matchMedia("(max-width: 990px)")
      if (x.matches) { // If media query matches
      this.numero = "100px";
      this.numerodebanner=2;
      this.numerodebanner2=4;
      } else {
        this.numero = "200px";
        this.numerodebanner=3;
        this.numerodebanner2=6;
      }
  
      
  }

}
function reloadPage() {
 
}