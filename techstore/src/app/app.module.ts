import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { BotaoLoginComponent } from './botao-login/botao-login.component';
import { CorpoComponent } from './corpo/corpo.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BotaoComprarComponent } from './botao-comprar/botao-comprar.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    BotaoLoginComponent,
    CorpoComponent,
    BotaoComprarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
