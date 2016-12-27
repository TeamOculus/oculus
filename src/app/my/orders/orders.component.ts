import { Component, OnInit } from '@angular/core';
import { MainService } from '../../services/main.service';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],
  providers: [MainService]
})
export class OrdersComponent implements OnInit {
  currentUser;
  pastOrders = [];

  constructor(private store: Store<any>, private mainService: MainService, private router: Router) {
    store.select('user')
      .subscribe( res => {
        // console.log("from currentuser subscribe", res);
        this.currentUser = res;
      });
    }

  ngOnInit() {
    if (this.currentUser.username) {
    this.mainService.getOrderInfo(this.currentUser.username)
      .subscribe(res => {
        console.log(res);
        this.pastOrders = res.reverse();
      });
    }
  }

}
