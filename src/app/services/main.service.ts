// tslint:disable:quotemark

import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class MainService {

  constructor(private http: Http) {
    console.log("mainService initialized...");
  }

  createUser(userObject) {
    console.log("from createUser in service", userObject);
    return this.http.post('/api/users', userObject);
  }

  checkUser(userObject) {
    console.log("from checkUser in service", userObject);
    return this.http.post('/api/users/login', userObject)
            .map(x => {
              return x;
            });
  }
  
  getUserInfo(username) {
    console.log("from getuserinfo in service", username);
    return this.http.get(`/api/users/${username}`).map(res => res.json());

  }

  addItemToCart(item, username) {
    console.log("from addItemToCart in service", item);
    return this.http.put(`/api/users/${username}/addtocart`, item);
  }

  removeItemFromCart(item, username) {
    console.log("from removeItemFromCart in service", item);
    return this.http.put(`/api/users/${username}/removefromcart`, item);
  }

  addToOrders(order) {
    console.log("from addToOrders in service", order);
    return this.http.post(`/api/orders`, order);
  }

  resetCart(username) {
    console.log("from resetCart in service");
    return this.http.put(`/api/resetcart/${username}`, null);
  }

  getOrderInfo(username) {
   console.log("from getorderinfo", username);
   return this.http.get(`/api/orders/${username}`).map(res => res.json());
  }

  sendToken(token){
    console.log("from sendToken", token);
    return this.http.post(`/api/stripe`, token);
  }
}
