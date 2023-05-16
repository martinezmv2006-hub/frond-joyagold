import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  url:String = "http://localhost:8080"
  
  constructor(private http:HttpClient) { }

  getAllProduct():Observable<Product[]>{
    let path = this.url + "/product/get"
    return this.http.get<Product[]>(path);
  }

  getProduct(identificador:string):Observable<Product>{
    let path = this.url + "/product/get/" + identificador
    return this.http.get<Product>(path);
  }

  saveProduct(product:Product):Product{
    const productResp:Product = new Product();
    let headers = new HttpHeaders({'Content-Type': 'application/json', 'Accept': 'application/json'});
    let path = this.url + "/product/save"
    console.log("createProduct:"+path+" -- "+JSON.stringify(product));
    const body = JSON.stringify(product);
    this.http.post<Product>(path, body, {headers: headers})
    .subscribe((res) => {
      console.log(res);
      productResp.id = res.id;
      productResp.name = res.name;
      productResp.material = res.material;
      productResp.type = res.type;
      productResp.price = res.price;
      productResp.other = res.other;
    });
    console.log(JSON.stringify(productResp));
    return productResp;
  }

  deleteProduct(identificador:number){
    let path = this.url + "/product/delete?id=" + identificador
    let headers = new HttpHeaders({'Content-Type': 'application/json', 'Accept': 'application/json'});
    console.log("path:"+path);
    this.http.delete(path, {headers: headers}).subscribe();
    console.log("sale");
  }
}
