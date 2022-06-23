import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { producto,categorias,subcategorias } from '../bdproducto.service';
import { HttpClientModule, HttpClient  } from '@angular/common/http';

import fetch from 'cross-fetch';

@Component({
  selector: 'app-elsalvador',
  templateUrl: './elsalvador.component.html',
  styleUrls: ['./elsalvador.component.css']
})

export class ElsalvadorComponent implements OnInit {

  
  private sub: any;
  public paramTxt: string;

  producto = producto;
  
  constructor(private route: ActivatedRoute, private router: Router) { }

   styleObject = {};
   public numero:string;
   public numerodebanner:number;
   public numerodebanner2:number;

  ngOnInit(): void {

    this.sub = this.route.params.subscribe(params => {
      this.paramTxt = params['refrescar'];
      });
      if(this.paramTxt=='_')
      {
       
        window.location.href = "#/elsalvador/.";
        window.location.reload();
      }
      else{
        window.location.href = "#/elsalvador/.";
        setTimeout(function(){
          window.scrollTo(0, 0);
       }, 600);
      }
      window.scrollTo(0, 0);



  /*   var x = window.matchMedia("(max-width: 990px)")
      if (x.matches) { // If media query matches
      this.numero = "100px";
      this.numerodebanner=2;
      this.numerodebanner2=4;
      } else {
        this.numero = "200px";
        this.numerodebanner=3;
        this.numerodebanner2=6;
      }
   */
 

   
    

    window.scrollTo(0, 0);
   

    /* ***** */

    
         /* ***** */

    }  
 
    
}
