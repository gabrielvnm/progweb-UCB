import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { TestandoComponent } from './testando/testando.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { ContatoComponent } from './contato/contato.component';
import { NotFoundComponent } from './not-found/not-found.component';


const routes: Routes = [
  { path: '', redirectTo: "home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "produtos", component: ProductsComponent },
  { path: "testando", component: TestandoComponent },
  { path: "carrinho", component: CarrinhoComponent },
  { path: "contato", component: ContatoComponent },
  { path: '**', component: NotFoundComponent} 
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }

console.log('Routes configured:', routes);
