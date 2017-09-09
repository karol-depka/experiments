import { Injectable } from '@angular/core';
import {Http} from '@angular/http'

@Injectable()
export class SomeHttpCallsService {

  constructor(
    private http: Http
  ) {
  }

  someCall(selected1: any, selected2: any) {
    return this.http.get('https://jsonplaceholder.typicode.com/posts?userId=1')
  }
}
