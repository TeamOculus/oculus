import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  currentUser;
  cart;
  available;
  totalprice;

  constructor(private store: Store<any>) {
    store.select('user')
      .subscribe( res => {
        console.log("from currentuser subscribe", res);
        this.currentUser = res;
      });
    store.select('cart')
      .subscribe( res => {
        console.log("from available subscribe", res);
        this.cart = res.cart;
        this.available = res.available;
        this.totalprice = res.totalprice;
      });
  }

  ngOnInit() {
    console.log("from this.currentuser", this.currentUser)

    if (this.currentUser.username){
      console.log("there is a logged in user")
    } else {
      console.log("no logged in user")
      console.log("this.available", this.available)
      console.log("this.cart", this.cart)
    }
  }

  addToCart(availItem) {
    console.log(availItem)
  }

}
