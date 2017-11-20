import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
// import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';

const API_URL = environment.apiUrl;

@Injectable()
export class ProductsService {

  constructor(
    private http: HttpClient
  ) {
  }

  public getAllProducts() {
    return this.http.get(API_URL + '/rest/v2/electronics/products/search?query=camera&format=json');
  }
}