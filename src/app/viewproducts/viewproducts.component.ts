import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-viewproducts',
  templateUrl: './viewproducts.component.html',
  styleUrls: ['./viewproducts.component.css']
})
export class ViewproductsComponent implements OnInit {
  Repdata:any
p: number=1;
imagedata:any
check1:boolean=false

  constructor(private newService: CommonService,private router: Router) { }
  ngOnInit() {
    this.newService.getpro().subscribe(data => {this.Repdata =data
      console.log(this.Repdata)
      
       
    })

  }

}
