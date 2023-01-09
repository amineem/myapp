export class Product {
    id: number;
    libelle: string;
    price: number;
    imageUrl: string;
    dispo :boolean;


constructor(id:number, libelle:string, price:number, imageUrl:string, dispo:boolean){
    this.id = id;
    this.libelle = libelle;
    this.price = price;
    this.imageUrl = imageUrl;
    this.dispo =  dispo;
}
}