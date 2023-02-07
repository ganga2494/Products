import { Component,OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { CommonService } from '../common.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  constructor(private newService: CommonService,private router: Router) { }

  ngOnInit() {


  }
  submit(form:any){
    var firstName = form.Name;
    console.log(firstName);
    form.productcount=0;
  
  
    var comment = form.description;
    console.log(comment);

    this.newService.addcat(form)
    .subscribe(data => {
     console.log(data)
     alert("category Added Successfully")
     this.router.navigate(['/cat']);
     
    }
    )
  }

}
