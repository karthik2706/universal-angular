import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ProductsComponent } from './components/products.component';

import { ProductsService } from './services/products.service';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'my-app'}),
    HttpClientModule,
    HttpModule,
    RouterModule.forRoot([
      { path: '', component: ProductsComponent, pathMatch: 'full'}
    ])
  ],
  providers: [ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
