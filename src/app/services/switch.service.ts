import { EventEmitter, Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class SwitchService {

  estado = "none";

  constructor() { }

  $displayStyle = new EventEmitter<any>();
  $product = new EventEmitter<Product>();
  $productUpdate = new EventEmitter<Product>();

  obtenerEstado(): string {
    console.log("estado:"+this.estado)
    return this.estado;
  }

  cambiarEstado(nuevoEstado: string) {
    this.estado = nuevoEstado;
  }
  
}
