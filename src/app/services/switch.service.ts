import { EventEmitter, Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class SwitchService {

  constructor() { }

  $modal = new EventEmitter<any>();

  $displayStyle = new EventEmitter<any>();

  $product = new EventEmitter<Product>();
  
}
