import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-costarica',
  templateUrl: './costarica.component.html',
  styleUrls: ['./costarica.component.css']
})
export class CostaricaComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) { }
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
