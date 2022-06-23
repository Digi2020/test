import { Component,OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  title = 'barlleno';
  menues = "display:none;";
  menucol = "display:none;";
  menucosta = "display:none;";
  menuguate = "display:none;";
  menuhondu = "display:none;";
  menurp = "display:none;";
  menulogin="display:none;";


  /* ******* */

  footeres = "display:none;";
  footercol = "display:none;";
  footercosta = "display:none;";
  fiiterguate = "display:none;";
  footerhonfu = "display:none;";
  footerrp = "display:none;";


  ir(e){

    window.location.href = "#/"+e;    
    setTimeout(function(){
      window.location.reload();
  },600);
 
  }
  /* ******** */
  ngOnInit(): void {
    
    /* ***** */
    if(window.location.href.indexOf("elsalvador") > -1) {
      this.menues = "display:flex;";   
      this.footeres = "display:block;";            
    }
    if(window.location.href.indexOf("costarica") > -1) {
    /*   this.menucosta = "display:flex;";
      this.footercosta = "display:block;";  */
    }
    if(window.location.href.indexOf("guatemala") > -1) {
      this.menuguate = "display:flex;"; 
      this.fiiterguate = "display:block;"; 
    }
    if(window.location.href.indexOf("honduras") > -1) {
      this.menuhondu = "display:flex;";
      this.footerhonfu = "display:block;";
    }
    if(window.location.href.indexOf("colombia") > -1) {
      this.menucol = "display:flex;"; 
      this.footercol = "display:block;";
    }
    if(window.location.href.indexOf("rd") > -1) {
      this.menurp = "display:flex;";
      this.footerrp = "display:block;"; 
    }

    if(window.location.href.indexOf("logines") > -1) {
      this.menulogin = "display:flex; ";   
/*       this.menucosta = "display:block;";       */   

    }
    if(window.location.href.indexOf("registro") > -1) {
      this.menulogin = "display:flex; ";  
              
    }


    /* ****** */

  }
}
