import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';

import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-root',
  template: `
  <ul class="data-ctrl">
    <li *ngFor="let product of products">
      <p>{{product.name}}</p>
    </li>
  </ul>
  `,
  providers: [ProductsService]
})
export class ProductsComponent implements OnInit {

  products;

  constructor(
    private productsService: ProductsService
  ) {
  }

  public ngOnInit() {
    this.productsService.getAllProducts().subscribe(res => {
      let data = res;
      console.log(data);

      // Read the result field from the JSON response.
      this.products = data['products'];
    });
  }
}