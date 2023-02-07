import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  implements OnInit{

  Repdata:any
p: number=1;
imagedata:any
check1:boolean=false

  constructor(private newService: CommonService,private router: Router) { }
  ngOnInit() {
    this.newService.getprocat().subscribe(data => {this.Repdata =data
      console.log(this.Repdata)
      
       
    })

  }

}
