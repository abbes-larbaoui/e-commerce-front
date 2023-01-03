import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductService } from './services/product.service';
<<<<<<< HEAD

import { Routes, RouterModule} from '@angular/router';
=======
import { Routes, RouterModule } from '@angular/router';
>>>>>>> refs/remotes/e-commerce-front/master
import { ProductCategoryMenuComponent } from './components/product-category-menu/product-category-menu.component';
import { SearchComponent } from './components/search/search.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';

<<<<<<< HEAD
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

=======
>>>>>>> refs/remotes/e-commerce-front/master
const routes: Routes = [
  {path: 'products/:id', component: ProductDetailsComponent},
  {path: 'search/:keyword', component: ProductListComponent},
  {path: 'category/:id', component: ProductListComponent},
  {path: 'category', component: ProductListComponent},
  {path: 'products', component: ProductListComponent},
  {path: '', redirectTo: '/products', pathMatch: 'full'},
  {path: '**', redirectTo: '/products', pathMatch: 'full'}
<<<<<<< HEAD
];
=======
]
>>>>>>> refs/remotes/e-commerce-front/master

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductCategoryMenuComponent,
    SearchComponent,
    ProductDetailsComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
<<<<<<< HEAD
    HttpClientModule,
    NgbModule
=======
    HttpClientModule
>>>>>>> refs/remotes/e-commerce-front/master
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
