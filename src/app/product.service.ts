import { Injectable } from '@angular/core';
import { Product } from './product';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  listProduit:Product[] = [
    new Product(1,"iphone11",6000,"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/refurb-iphone11-black-2019?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1611169026000",true),
    new Product(2,"Samsung",7000,"https://images.samsung.com/is/image/samsung/p6pim/levant/2202/gallery/levant-galaxy-s22-ultra-s908-413037-sm-s908edrgmea-thumb-530970207",false),
    new Product(3,"huawei y9",5000,"https://rightech.ma/2386-large_default/huawei-y9-prime-2019-smartphone-4go-128go-659.jpg",true)
  ]

  constructor(private http:HttpClient) {
    this.http.get('https://dummyjson.com/products')
                      .subscribe((response:any)=>{
                        console.log(response);
                          for(let i = 0;i<response.products.length;i++){
                            this.listProduit.push(new Product(i+1,response.products[i].title,response.products[i].price,response.products[i].images[0],true));
                         }
                      })
   }

  add(produit:Product):void{
    this.add(produit);
  }
  get(id:number):Product|undefined{
      return this.listProduit.find(function(produit:Product){
        if(produit.id === id){
          return true;}
        else 
          return false;
      });
  }
  
  getAll(){
    return this.listProduit;
  }

  getProducts(){}

  getCategories(){
    return this.http.get("https://dummyjson.com/products/categories");
  }

  getProductByCategory(key:string){
    return this.http.get("https://dummyjson.com/products/category/"+key)
  }
                      
  }

  

