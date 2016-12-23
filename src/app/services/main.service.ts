import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class MainService {

  constructor(private http: Http) {
    console.log("mainService initialized...")
  }

  createUser(userObject){
    console.log("from createuser in service", userObject)
    return this.http.post('/api/users', JSON.stringify(userObject));
  }

}
