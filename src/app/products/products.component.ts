import { Component,OnInit} from '@angular/core';
import { CommonService } from '../common.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{
  constructor(private newService: CommonService,private router: Router) { }
Repdata:any
filesToUpload: Array<File> = [];
  imagedata:any
  userForm={image:"", image1:"", image2:""};
  ngOnInit() {
    this.newService.getcat().subscribe(data => {this.Repdata =data
      console.log(this.Repdata)})

  }
  keyPress(event: any) {
    const pattern = /[0-9\+\-\ ]/;

    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }

  selectedFiles = {};
  onFileSelected(fileInput: any, title: any) {
    console.log("files")
    this.filesToUpload = <Array<File>>fileInput.target.files;
    const formData: any = new FormData();
    const files: Array<File> = this.filesToUpload;
    console.log(this.filesToUpload,files[0],files[0]['name'])
    formData.append("uploads[]", files[0], files[0]['name'],);
    console.log(formData)



    this.newService.saveFiles(formData).subscribe(data => {
      this.imagedata = data
  var a =JSON.stringify(this.imagedata)
console.log(a)
      console.log(this.imagedata)
      if(title == 'image') this.userForm.image = this.imagedata.id;
console.log("hello"+this.userForm.image)
      // else if(title == 'residence') this.userForm.residence = this.imagedata._id;
      // else if(title == 'incomeProof') this.userForm.incomeProof = this.imagedata._id;
    

    });

  }
  selectedObject:any
  procategory:any
  onChangeofOptions(index:any) {
    console.log(index);
    this.procategory=index
    
  }
 selected:any;


  submit(form:any){
    form.image=this.imagedata.id,
    form.category=this.procategory.id
    console.log(form)



    this.newService.addpro(form)
    .subscribe(data => {
     console.log(data)
 
     this.procategory.productname= form.Name
     this.newService.updatecat(this.procategory).subscribe(upcat=>{
      console.log(upcat)  
     })
    
     
    }
    )
     this.procatlist(form.Name,form.Price,this.procategory.Name)
  }

  procatlist(x:any,y:any,z:any){
    console.log(x,y,z)

    var procat ={
      productname:x,
      catname:z,
      price:y
  }
  this.newService.addcatpro(procat).subscribe(upcatpro=>{
   console.log(upcatpro)
  this.router.navigate(['/product']);

  })

  }

}
