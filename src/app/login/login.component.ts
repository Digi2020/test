import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private sub: any;
  public paramTxt: string;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {

    this.sub = this.route.params.subscribe(params => {
      this.paramTxt = params['refrescar'];
      });
      if(this.paramTxt=='_')
      {
       
        window.location.href = "#/logines/.";
        window.location.reload();
      }
      else{
        window.location.href = "#/logines/.";
        setTimeout(function(){
          window.scrollTo(0, 0);
       }, 600);
      }
      window.scrollTo(0, 0);


  }

}
