// tslint:disable:quotemark
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { MainService } from './../services/main.service';
import { MOVE_ITEM_AVAIL_TO_CART } from './../reducers/cart_reducer';
import { MOVE_ITEM_CART_TO_AVAIL } from './../reducers/cart_reducer';
import { LOAD_SAVED_CART } from './../reducers/cart_reducer';



@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
  providers: [MainService]
})
export class CartComponent implements OnInit {

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
    console.log("this.cartProps", this.cartProps);

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

  navCheckout() {
    if (this.currentUser.username) {
      this.router.navigate(['/checkout']);
    } else {
      this.router.navigate(['/login'])
    }
  }

  availToCart(availItem) {
    // if logged in vs not
    if (this.currentUser.username) {
      // console.log("user logged in", this.currentUser);
      this.store.dispatch({
        type: MOVE_ITEM_AVAIL_TO_CART,
        payload: availItem
      });
      this.mainService.addItemToCart(availItem, this.currentUser.username)
        .subscribe(res => {
          // console.log("added item to database")
        })
    } else {
      // console.log("user not logged in");
      this.store.dispatch({
        type: MOVE_ITEM_AVAIL_TO_CART,
        payload: availItem
      })
    }
  }

  cartToAvail(cartItem) {
    // if logged in vs not
    if (this.currentUser.username){
      // console.log("user logged in")
      this.store.dispatch({
        type: MOVE_ITEM_CART_TO_AVAIL,
        payload: cartItem
      });
      this.mainService.removeItemFromCart(cartItem, this.currentUser.username)
        .subscribe(res => {
          // console.log("removed item from database")
        })

    } else {
      // console.log("user not logged in");
      this.store.dispatch({
        type: MOVE_ITEM_CART_TO_AVAIL,
        payload: cartItem
      });
    }
  }

}
