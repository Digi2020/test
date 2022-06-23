import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-rp',
  templateUrl: './rp.component.html',
  styleUrls: ['./rp.component.css']
})
export class RpComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) { }
  styleObject = {};
  public numero:string;
  public numerodebanner:number;
  public numerodebanner2:number;

  private sub: any;
  public paramTxt: string;

 ngOnInit(): void {

  this.sub = this.route.params.subscribe(params => {
      
    this.paramTxt = params['refrescar'];
    });
   
    
    if(this.paramTxt=='.')
    {
      
      setTimeout(function(){
        window.scrollTo(0, 0);
     }, 400);
    }
    else{
      window.location.href = "#/rd/.";
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
 


  
   

   window.scrollTo(0, 0);
  }

}
