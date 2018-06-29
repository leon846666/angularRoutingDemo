import { Component, OnInit } from '@angular/core';

  //ActivatedRoute can receive the dynamic paramters and using 'get ' receive data.
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-shoplist',
  templateUrl: './shoplist.component.html',
  styleUrls: ['./shoplist.component.css']
})
export class ShoplistComponent implements OnInit {

  constructor(private router:ActivatedRoute) { }

  ngOnInit() {
   // this.router.params; receive the dynamic parameters

   // console.log(this.router.queryParams);
   this.router.queryParams.subscribe(function(data){
    console.log(data)
   })
  }

}
