import { Component, Input, Output } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';
import { SwitchService } from 'src/app/services/switch.service';


@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.css']
})
export class FormProductComponent {
  @Input() product:Product = new Product();
  @Output() productResp:Product = new Product();

  displayStyle = this.modalS.$displayStyle;

  constructor(private productService: ProductService, private modalS: SwitchService) {  }

  ngOnInit(){
    this.modalS.$product.subscribe((valor)=> {this.product = valor})
  }

  onSaveProduct(){
    console.log("onSaveProduct: "+JSON.stringify(this.product));
    this.productResp = this.productService.saveProduct(this.product);
    console.log("ProductResp: "+JSON.stringify(this.productResp));
    this.modalS.cambiarEstado("none");
  }

}
