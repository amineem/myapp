import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { ActivatedRoute } from '@angular/router';
import { PanierService } from '../panier.service';
import { Product } from '../product';

@Component({
  selector: 'app-detail-produit',
  templateUrl: './detail-produit.component.html',
  styleUrls: ['./detail-produit.component.css']
})
export class DetailProduitComponent implements OnInit {
  produit !: Product 

  constructor(private productService :ProductService,
              private Route : ActivatedRoute,
              private panierService: PanierService) { }

  ngOnInit(): void {
    const id : number = this.Route.snapshot.params["id"];
    let produit = this.productService.get(+id);
    if(produit)
      this.produit = produit;
  }

}
