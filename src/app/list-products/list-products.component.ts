import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})



export class ListProductsComponent implements OnInit {
   listProduit:Product[] = []
   listCategory:any[] = []
constructor(private productService :ProductService){}

  ngOnInit(): void {
    this.listProduit = this.productService.getAll(),
    this.getCategories();
  }

  modifyProduct($event: Product) {
    alert($event.price)    
  }
  detectchanges(){}

  getCategories(){
    this.productService.getCategories().subscribe(
      (cat:any)=>{
        console.log(cat);
        this.listCategory=cat;
      }
    )
  }

  filterCategory(event:any){
      let value = event.target.value
    this.productService.getProductByCategory(value).subscribe(
       (res:any)=>{
        this.listProduit=res;
       }
    )

  }
}
