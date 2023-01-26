import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { reduce } from 'rxjs';
import { DetailPanier } from 'src/app/DetailPanier';
import { PanierService } from 'src/app/panier.service';
import { Product } from 'src/app/product';


@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
  
})
export class ProductItemComponent implements OnInit {
  @Input() product: Product = new Product(0,"",0,"",true);
  @Output() productSelected = new EventEmitter<Product>();
  
  
  
  clickedProduct() {
    // this.productSelected.emit(this.product);
    this.ps.addtopanier(new DetailPanier(this.product,1));
    console.log(this.product);
    }
  
  productDispo(){
    if(this.product.dispo == true){return "green";}
    else return "red";
  }

  constructor(private ps:PanierService) {

  }



  ngOnInit(): void {
  }

}
