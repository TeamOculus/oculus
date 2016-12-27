// tslint:disable:quotemark

import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { MainService } from './../services/main.service';
import { LOAD_SAVED_CART } from './../reducers/cart_reducer';
import { RESET_CART } from './../reducers/cart_reducer';

let config = require('./../../../server/config.js');

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
  providers: [MainService]
})
export class CheckoutComponent implements OnInit {

  currentUser = {};
  cartProps = {cart: '', available: '', totalprice: ''};
  cost;

  constructor(private store: Store<any>, private mainService: MainService, private router: Router) {
    store.select('user')
      .subscribe( res => {
        // console.log("from currentuser subscribe", res);
        this.currentUser = res;
      });
    store.select('cart')
      .subscribe( res => {
        // console.log("from cart subscribe", res);
        this.cartProps = {
          cart: res.cart,
          available: res.available,
          totalprice: res.totalprice
        }
        this.cost = this.cartProps.totalprice + 30;
      });

    this.saveOrder = this.saveOrder.bind(this);
  }

  ngOnInit() {
    // console.log("this.cartProps", this.cartProps);

    // if logged in vs not
    if (this.currentUser.username) {
      // console.log("user logged in");
      this.mainService.getUserInfo(this.currentUser.username)
        .subscribe(res => {
          this.store.dispatch({
            type: LOAD_SAVED_CART,
            payload: res
          });
        });

    } else {
      // console.log("user not logged in");
    }
  }

  saveOrder(shippingInfo) {
    let dateNow = new Date();
    if (this.currentUser.username) {
      let fullOrder = {
        username: this.currentUser.username,
        items: this.cartProps.cart,
        date: `${dateNow.getMonth() + 1} ${dateNow.getDay()}, ${dateNow.getFullYear()}`,
        shipped: false,
        totalprice: this.cost,
        shipping: shippingInfo
      };
      console.log(fullOrder)
      this.mainService.addToOrders(fullOrder)
        .subscribe(res => {
          console.log("added to orders");
        });
      this.mainService.resetCart(this.currentUser.username)
        .subscribe(res => {
          console.log("wiped savedcart")
        })
      this.store.dispatch({
        type: RESET_CART
      });
      this.router.navigate(['/my/profile']);
    } else {
      let fullOrder = {
        username: "N/A",
        items: this.cartProps.cart,
        date: `${dateNow.getMonth() + 1} ${dateNow.getDay()}, ${dateNow.getFullYear()}`,
        shipped: false,
        totalprice: this.cost,
        shipping: shippingInfo
      };
      console.log(fullOrder)
      this.mainService.addToOrders(fullOrder)
        .subscribe(res => {
          console.log("added to orders");
        });
      this.store.dispatch({
        type: RESET_CART
      });
      this.router.navigate(['/']);
    }
  }

  submitOrder(shippingInfo){
    for (let i in shippingInfo) {
      if (shippingInfo[i] === "") {
        return alert(`${i} was not filled`)
      }
    }
    // stripe here
    let saveOrderPointer = this.saveOrder;
    var handler = (<any>window).StripeCheckout.configure({
      key: config.stripe,
      locale: 'auto',
      token: function (token: any) {
          // You can access the token ID with `token.id`.
          // Get the token ID to your server-side code for use.
          console.log("from token", token.id)

          //put into db if get token back
          saveOrderPointer(shippingInfo);

        }
    });
    handler.open({
      name: 'Demo Site',
      description: '2 widgets',
      amount: this.cost * (100)
    });

  }

}
