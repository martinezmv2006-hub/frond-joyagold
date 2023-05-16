import { Component } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from '../../models/product';
import { SwitchService } from 'src/app/services/switch.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  productList: Product[] = new Array;
  modalSwitch: boolean = false;
  displayStyle = "none";
  displayStyleConfirm = "none";
  displayStyleDetail = "none";
  productSelect: Product = new Product;

  constructor(private productService: ProductService, private modalS: SwitchService) {
    console.log("entra:");
    this.productService.getAllProduct().subscribe(
      products => this.productList = products);

  }

  ngOnInit() {
    this.modalS.$modal.subscribe((valor) => { this.modalSwitch = valor })
  }

  openPopupConfirm(product: Product) {
    this.productSelect = product;
    this.displayStyleConfirm = "block";
  }

  closePopupConfirm() {
    this.displayStyleConfirm = "none";
  }

  openPopupDetail(product: Product) {
    this.productSelect = product;
    this.displayStyleDetail = "block";
  }

  closePopupDetail() {
    this.displayStyleDetail = "none";
  }

  openPopup() {
    this.modalS.$product.emit(new Product);
    this.displayStyle = "block";
    console.log("displayStyle: " + this.displayStyle);
  }

  openPopupEdit(product: Product) {
    this.displayStyle = "block";
    console.log("displayStyle: " + this.displayStyle);
    console.log("product: " + product.id + " name" + product.name + " material" + product.material + " other" + product.other + " price" + product.price + " type" + product.type);
    this.modalS.$product.emit(product);
  }

  closePopup() {
    this.displayStyle = "none";
  }

  deletePoduct() {
    console.log("idProduct:" + this.productSelect.id);
    this.productService.deleteProduct(this.productSelect.id);
    const indice = this.productList.indexOf(this.productSelect);
    if (indice !== -1) {
      this.productList.splice(indice, 1);
    }
    this.closePopupConfirm();
  }
}
