<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
import { ProductCategory } from 'src/app/common/product-category';
import { ProductService } from 'src/app/services/product.service';
=======
import { ProductService } from 'src/app/services/product.service';
import { ProductCategory } from './../../common/product-category';
import { Component, OnInit } from '@angular/core';
>>>>>>> refs/remotes/e-commerce-front/master

@Component({
  selector: 'app-product-category-menu',
  templateUrl: './product-category-menu.component.html',
  styleUrls: ['./product-category-menu.component.css']
})
export class ProductCategoryMenuComponent implements OnInit {

  productCategories: ProductCategory[];
<<<<<<< HEAD
  
=======

>>>>>>> refs/remotes/e-commerce-front/master
  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.listProductCategories();
  }

  listProductCategories() {
<<<<<<< HEAD

    this.productService.getProductCategories().subscribe(
      data => {
        console.log('Product Categories=' + JSON.stringify(data));
=======
    this.productService.getProductCategories().subscribe(
      data => {
>>>>>>> refs/remotes/e-commerce-front/master
        this.productCategories = data;
      }
    );
  }

}
