import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { Pipe, PipeTransform } from '@angular/core';

import { dirConfig } from './dir.config';

import { RouterConfig,RouterDeclarations } from './router.config';

import { ProductsModel } from './model/products.model';
import { BillingFormModel } from './model/billingformfields.model';
import { CompanyDetailsModel } from './model/companydetails.model';


import { FilterPipe } from './pipes/filter.pipe';
import { SortPipe } from './pipes/sort.pipe';

import { StoreModule } from '@ngrx/store';
import { reducer } from './reducers/demo.reducer';

import { CartService } from './services/cart.service';
import { PaymentComponent } from './payment/payment.component';
 
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  imports:      [ BrowserModule, FormsModule,ReactiveFormsModule,HttpClientModule,RouterConfig, StoreModule.forRoot({
    demoStore: reducer
  }) ],
  declarations: [ AppComponent, HelloComponent, dirConfig ,RouterDeclarations,FilterPipe,SortPipe, PaymentComponent ],
  providers : [ProductsModel,BillingFormModel,CompanyDetailsModel, StorageService,CartService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
