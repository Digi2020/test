import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  private sub: any;
  public paramTxt: string;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {

    this.sub = this.route.params.subscribe(params => {
      this.paramTxt = params['refrescar'];
      });
      if(this.paramTxt=='_')
      {
       
        window.location.href = "#/registro/.";
        window.location.reload();
      }
      else{
        window.location.href = "#/registro/.";
        setTimeout(function(){
          window.scrollTo(0, 0);
       }, 600);
      }
      window.scrollTo(0, 0);


  }

}
