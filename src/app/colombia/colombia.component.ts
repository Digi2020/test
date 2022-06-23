import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-colombia',
  templateUrl: './colombia.component.html',
  styleUrls: ['./colombia.component.css']
})
export class ColombiaComponent implements OnInit {

  constructor() { }
  styleObject = {};
  public numero:string;
  public numerodebanner:number;
  public numerodebanner2:number;

 ngOnInit(): void {

   var x = window.matchMedia("(max-width: 990px)")
     if (x.matches) { 
     this.numero = "100px";
     this.numerodebanner=2;
     this.numerodebanner2=4;
     } else {
       this.numero = "200px";
       this.numerodebanner=3;
       this.numerodebanner2=6;
     }
 
     setTimeout(function(){
      window.scrollTo(0, 0);
   }, 600);
        
  }

}
