// tslint:disable:quotemark

import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { MOVE_ITEM_AVAIL_TO_CART } from './../reducers/cart_reducer';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  currentUser;
  cartProps;
  cost;

  constructor(private store: Store<any>) {
    store.select('user')
      .subscribe( res => {
        console.log("from currentuser subscribe", res);
        this.currentUser = res;
      });
    store.select('cart')
      .subscribe( res => {
        console.log("from cart subscribe", res);
        this.cartProps = {
          cart: res.cart,
          available: res.available,
          totalprice: res.totalprice
        }
        this.cost = this.cartProps.totalprice;
      });
  }

  ngOnInit() {
    console.log("this.cartProps", this.cartProps);

    // if logged in vs not
    if (this.currentUser.username){
      console.log("user logged in")
    } else {
      console.log("user not logged in")
    }
  }

  availToCart(availItem) {
    // if logged in vs not
    if (this.currentUser.username){
      console.log("user logged in")
    } else {
      console.log("user not logged in");
      this.store.dispatch({
        type: MOVE_ITEM_AVAIL_TO_CART,
        payload: availItem
      })
    }
  }

}
