import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {
  cantidad=1;
  preciou=0;
  total=0;
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
  constructor() { }

  ngOnInit(): void {
  }

}
