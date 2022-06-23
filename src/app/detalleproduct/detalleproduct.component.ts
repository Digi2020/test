import { Component, OnInit } from '@angular/core';
import { producto,categorias,subcategorias,imagenes } from '../bdproducto.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalleproduct',
  templateUrl: './detalleproduct.component.html',
  styleUrls: ['./detalleproduct.component.css']
})
export class DetalleproductComponent implements OnInit {

  arrayDesdeService;
  images;
  private sub: any;
  public paramTxt: string;
  public paramTxt2: string;
  newarray;
  newarrayimg;
  cantidad=1;
  preciou=0;
  total=0;
  constructor(private route: ActivatedRoute, private router: Router) { }

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
  recarga(){
    setTimeout(function(){
      window.location.reload();
   }, 600);
  }
  ngOnInit(): void {
    this.arrayDesdeService=producto;
    this.images=imagenes;

    this.sub = this.route.params.subscribe(params => {
      this.paramTxt = params['refrescar'];
      this.paramTxt2 = params['id'];
      });
      if(this.paramTxt=='_')
      {
       
        window.location.href = "#/elsalvador/detalle/"+this.paramTxt2+"/.";
        window.location.reload();
      }
      else{
        window.location.href = "#/elsalvador/detalle/"+this.paramTxt2+"/.";
        setTimeout(function(){
          window.scrollTo(0, 0);
       }, 600);
      }
      window.scrollTo(0, 0);


      this.newarray = this.arrayDesdeService.filter( productos => {
        return productos.positionId == this.paramTxt2;
          });

          this.newarrayimg = this.images.filter( productos => {
            return productos.positionId == this.paramTxt2;
              });
          
        console.log(this.newarray);
  }

}
