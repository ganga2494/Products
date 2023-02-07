import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http: HttpClient) { }
  serverurl = "http://localhost:8080"
  addcat(data:any) {
    console.log(data,"service")
  
  return this.http.post(this.serverurl + '/api/categorys', data, )
  }
  saveFiles(formData:any) {
    // console.log(property)
    return this.http.post(this.serverurl + '/api/medias', formData)
  }
  getcat() {
    console.log("dugcdvcil")
    return this.http.get(this.serverurl+'/api/categorys') 
    }
    addpro(data:any) {
      console.log(data,"service")
    
    return this.http.post(this.serverurl + '/api/products', data, )
    }
    updatecat(data:any) {
      console.log(data)
      return this.http.put(this.serverurl + '/api/categorys/' + data.id, data);
    }
    getpro() {
      console.log("pro")
      return this.http.get(this.serverurl+'/api/products') 
      }

      addcatpro(data:any) {
        console.log(data,"addcatpro")
      
      return this.http.post(this.serverurl + '/api/tutorials', data, )
      }

      getprocat() {
        console.log("pro")
        return this.http.get(this.serverurl+'/api/tutorials') 
        }
}
