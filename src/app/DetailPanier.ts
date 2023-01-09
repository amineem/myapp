import { Product } from "./product";

export class DetailPanier{
    pdt! : Product;
    qte! : number;

    constructor( pdt : Product,qte : number){
        pdt = this.pdt;
        qte = this.qte;
    }
}