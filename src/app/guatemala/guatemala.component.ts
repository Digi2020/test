import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-guatemala',
  templateUrl: './guatemala.component.html',
  styleUrls: ['./guatemala.component.css']
})
export class GuatemalaComponent implements OnInit {

  constructor() { }

  styleObject = {};
  public numero:string;
  public numerodebanner:number;
  public numerodebanner2:number;

 ngOnInit(): void {

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
 


  
   

   window.scrollTo(0, 0);
  }

}
