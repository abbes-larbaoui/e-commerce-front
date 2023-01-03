<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/common/product';
import { ProductService } from 'src/app/services/product.service';
import { ActivatedRoute } from '@angular/router';
=======
import { ActivatedRoute } from '@angular/router';
import { Product } from './../../common/product';
import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
>>>>>>> refs/remotes/e-commerce-front/master

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product: Product = new Product();

  constructor(private productService: ProductService,
              private route: ActivatedRoute) { }

<<<<<<< HEAD
  ngOnInit(): void {
    this.route.paramMap.subscribe(() => {
      this.handleProductDetails();
    })
  }

  handleProductDetails() {

    // get the "id" param string. convert string to a number using the "+" symbol
=======
  ngOnInit() {
    this.route.paramMap.subscribe(() => {
      this.hundleProductDetails();
    })
  }

  hundleProductDetails() {
>>>>>>> refs/remotes/e-commerce-front/master
    const theProductId: number = +this.route.snapshot.paramMap.get('id');

    this.productService.getProduct(theProductId).subscribe(
      data => {
        this.product = data;
      }
    )
  }

}
