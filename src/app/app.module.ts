import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListProductsComponent } from './list-products/list-products.component';
import { ProductItemComponent } from './list-products/product-item/product-item.component';
import { ProductService } from './product.service';
import { DetailProduitComponent } from './detail-produit/detail-produit.component';
import { AuthComponent } from './auth/auth.component';
import { PanierComponent } from './panier/panier.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormInscriptionComponent } from './form-inscription/form-inscription.component';
 

const appRoutes:Routes= [
  {path: "produits",component:ListProductsComponent},
  {path: "detail/:id", component: DetailProduitComponent},
  {path: "Auth", component: AuthComponent},
  {path:"panier", component: PanierComponent},
  {path:"inscription",component:FormInscriptionComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    ListProductsComponent,
    ProductItemComponent,
    DetailProduitComponent,
    AuthComponent,
    PanierComponent,
    FormInscriptionComponent,
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
