import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { StorageService } from '../services/storage.service';
import { CartService } from '../services/cart.service';
import { Store } from '@ngrx/store';
import { AppState } from '../app.state';
import * as DemoActions from './../actions/demo.actions';
import { Demo } from '../modal/demo.modal';
@Component({
  selector: 'productslist-dir',
  template: `
  
  <div class="row">  
    <div class="col-md-4"  *ngFor = "let item of __allprdts | filter : __searchedProduct | sortBy : sortByOption  ">
        <div class="card"> 
        <div>         
          <img class="rounded mx-auto d-block img-responsive mt-3" src="{{item.product_image}}" alt="Card image cap">
          </div>
          <div class="card-body">
            <h6 class="card-title font-weight-bold">{{item.product_name}}</h6>
            <div class="row">
              <div class="col-md-6">
                <p class="card-text"> <small> {{item.product_desc}} </small></p>
              </div>
              <div class="col-md-6">
              <p class="text-right"> <small> $ {{item.product_price}} </small> </p>
              </div>
            </div>
            <button class="btn btn-sm btn-primary" (click)="addToCart(item.p_id,1,'')">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  
  `,
  styles: [`
     input{ margin: 5px; }
     img{
       height:120px;
       width:auto
     }
     .col-md-4{
       margin-bottom:20px;
     }
  `]
})
export class ProductsListDir {
  constructor(
    public storage: StorageService,
    public cart: CartService,
    private store: Store<AppState>
  )
{
  }
  demo: Observable<Demo[]>;
  @Input("allProductList") __allprdts: any = {};
  @Input("searchedText") __searchedProduct: string='';
  @Input("sortingBy") sortByOption: string='';
  
  @Output() refresh:EventEmitter<string> = new EventEmitter(); 

  ngOnInit(){
    this.sortByOption = 'product_name';
  }
  addToStore(nameL: string, genderL: string) {
    this.store.dispatch(new DemoActions.AddDemo({
      name: nameL,
      gender: genderL
    }))
  }
  addToCart(productId,productQty){    
    this.cart.allItems = this.__allprdts;
    this.cart.addToCart(productId,productQty,'');
    //
    //this.refresh.emit(true);
  }

  

}


