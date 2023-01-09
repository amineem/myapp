import { Injectable } from '@angular/core';
import { DetailPanier } from './DetailPanier';
import { ProductItemComponent } from './list-products/product-item/product-item.component';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class PanierService {
  Dtpanier : DetailPanier[] = [];
  constructor() {}

  addtopanier(Dtpanier:DetailPanier){
    this.Dtpanier.push(Dtpanier);
  }

  rmfromPanier(){
    
  }

  getall(){
    return this.Dtpanier;
  }
}
 