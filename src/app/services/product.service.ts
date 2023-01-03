<<<<<<< HEAD
=======
import { ProductCategory } from './../common/product-category';
>>>>>>> refs/remotes/e-commerce-front/master
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../common/product';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
<<<<<<< HEAD
import { ProductCategory } from '../common/product-category';
=======
>>>>>>> refs/remotes/e-commerce-front/master

@Injectable({
  providedIn: 'root'
})
export class ProductService {
<<<<<<< HEAD

  private baseUrl = 'http://localhost:8092/api/products';

=======
  
  private baseUrl = 'http://localhost:8092/api/products';
>>>>>>> refs/remotes/e-commerce-front/master
  private categoryUrl = 'http://localhost:8092/api/product-category';

  constructor(private httpClient: HttpClient) { }

  getProduct(theProductId: number): Observable<Product> {

<<<<<<< HEAD
    // need to build URL based on product id
=======
>>>>>>> refs/remotes/e-commerce-front/master
    const productUrl = `${this.baseUrl}/${theProductId}`;

    return this.httpClient.get<Product>(productUrl);
  }

<<<<<<< HEAD
  getProductListPaginate(thePage: number, 
                         thePageSize: number, 
                         theCategoryId: number): Observable<GetResponseProducts> {

    // need to build URL based on category id, page and size 
    const searchUrl = `${this.baseUrl}/search/findByCategoryId?id=${theCategoryId}`
                    + `&page=${thePage}&size=${thePageSize}`;

    return this.httpClient.get<GetResponseProducts>(searchUrl);
  }


  getProductList(theCategoryId: number): Observable<Product[]> {

    // need to build URL based on category id 
    const searchUrl = `${this.baseUrl}/search/findByCategoryId?id=${theCategoryId}`;
=======
  getProductList(categoryId: number): Observable<Product[]> {

    const searchUrl = `${this.baseUrl}/search/findByCategoryId?id=${categoryId}`;
>>>>>>> refs/remotes/e-commerce-front/master

    return this.getProducts(searchUrl);
  }

  searchProducts(theKeyword: string): Observable<Product[]> {
<<<<<<< HEAD

    // need to build URL based on the keyword 
=======
>>>>>>> refs/remotes/e-commerce-front/master
    const searchUrl = `${this.baseUrl}/search/findByNameContaining?name=${theKeyword}`;

    return this.getProducts(searchUrl);
  }

  private getProducts(searchUrl: string): Observable<Product[]> {
<<<<<<< HEAD
    return this.httpClient.get<GetResponseProducts>(searchUrl).pipe(map(response => response._embedded.products));
  }

  getProductCategories(): Observable<ProductCategory[]> {

=======
    return this.httpClient.get<GetResponseProducts>(searchUrl).pipe(
      map(response => response._embedded.products)
    );
  }

  getProductCategories(): Observable<ProductCategory[]> {
    
>>>>>>> refs/remotes/e-commerce-front/master
    return this.httpClient.get<GetResponseProductCategory>(this.categoryUrl).pipe(
      map(response => response._embedded.productCategory)
    );
  }
<<<<<<< HEAD

=======
>>>>>>> refs/remotes/e-commerce-front/master
}

interface GetResponseProducts {
  _embedded: {
    products: Product[];
<<<<<<< HEAD
  },
  page: {
    size: number,
    totalElements: number,
    totalPages: number,
    number: number
=======
>>>>>>> refs/remotes/e-commerce-front/master
  }
}

interface GetResponseProductCategory {
  _embedded: {
    productCategory: ProductCategory[];
  }
}