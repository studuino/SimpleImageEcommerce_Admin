import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import {AngularFontAwesomeModule} from 'angular-font-awesome';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import {ComponentsModule} from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    ProductsRoutingModule,
    AngularFontAwesomeModule,
    ComponentsModule
  ],
  declarations: [ProductsComponent, ProductDetailComponent]
})
export class ProductsModule { }