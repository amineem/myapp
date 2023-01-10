import { Component, OnInit } from '@angular/core';
import { DetailPanier } from '../DetailPanier';
import { PanierService } from '../panier.service';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {
  panier : DetailPanier[]= [];
  constructor(private panierservice: PanierService) {}

  ngOnInit(): void {
    
  }

}
