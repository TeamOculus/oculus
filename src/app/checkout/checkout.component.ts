// tslint:disable:quotemark

import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { MainService } from './../services/main.service';
import { LOAD_SAVED_CART } from './../reducers/cart_reducer';
import { RESET_CART } from './../reducers/cart_reducer';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
  providers: [MainService]
})
export class CheckoutComponent implements OnInit {

  currentUser;
  cartProps;
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

  submitOrder(shippingInfo){
    for (let i in shippingInfo) {
      if (shippingInfo[i] === "") {
        return alert(`${i} was not filled`)
      }
    }
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
      this.router.navigate(['/my/orders']);
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
      this.router.navigate(['/my/orders']);
    }
  }

}
