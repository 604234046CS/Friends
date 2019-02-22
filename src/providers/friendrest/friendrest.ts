import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Friend } from '../../moduls/friendmodul';


@Injectable()
export class FriendrestProvider {

  private url:string="https://raw.githubusercontent.com/604234046CS/Friend/master/Friends.json"

  constructor(public http : HttpClient) {
    console.log('Hello FriendrestProvider Provider');
  }

  getBookList():Observable<any>{
    return this.http.get<Friend>(this.url);
  }
  getFriendList():Observable<any>{
    return this.http.get<Friend>(this.url);
  }

}