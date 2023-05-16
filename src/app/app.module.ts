import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ManagerProductComponent } from './components/manager-product/manager-product.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FormProductComponent } from './components/form-product/form-product.component';

@NgModule({
  declarations: [
    AppComponent,
    ManagerProductComponent,
    ProductListComponent,
    FormProductComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
