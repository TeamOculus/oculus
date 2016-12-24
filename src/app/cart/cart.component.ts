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

  constructor(private store: Store<any>) {
    console.log("store", store)
    this.currentUser = store.select('user')
      .subscribe( res => {
        console.log(res)
      })
    this.available = store.select('cart')
  }

  ngOnInit() {
    console.log("from this.currentuser", this.currentUser)

    if (this.currentUser._subscriptions.key){
      console.log("there is logged in user")
      console.log("from this.available", this.available)
    } else {
      console.log("no logged in user")
      console.log("from this.available", this.available)
    }
  }

}
