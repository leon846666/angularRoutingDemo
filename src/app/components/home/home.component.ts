import { Component, OnInit } from '@angular/core';
import { Router,NavigationExtras} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router :Router) { 

  }

  ngOnInit() {

  }
  goNews(){
    alert("go news ")
    this.router.navigate(['/newscontent','123'])
  }

  goShop(aid,id){
    let navigateExtras:NavigationExtras={
      queryParams:{
        'aid':aid,
        'id':id
      }
    }
    this.router.navigate(['/shoplist'],navigateExtras)

   
  }
}
