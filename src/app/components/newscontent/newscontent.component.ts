import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-newscontent',
  templateUrl: './newscontent.component.html',
  styleUrls: ['./newscontent.component.css']
})
export class NewscontentComponent implements OnInit {
  
  // inject 
  constructor(private route:ActivatedRoute) { }

  ngOnInit() {

    this.route.params.subscribe(function(data){
      console.log(data.aid);
    })

  }

}
