import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-viewcat',
  templateUrl: './viewcat.component.html',
  styleUrls: ['./viewcat.component.css']
})
export class ViewcatComponent implements OnInit {
  dataFromDialog:any
  Repdata:any
  p: number=1;

  constructor(private newService: CommonService,private router: Router) { }


  ngOnInit() {
    this.newService.getcat().subscribe(data => {this.Repdata =data
      console.log(this.Repdata);

  })
 
}
}