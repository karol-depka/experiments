import { Component, OnInit } from '@angular/core';
import {SomeHttpCallsService} from '../some-http-calls.service'

@Component({
  selector: 'app-selects',
  templateUrl: './selects.component.html',
  styleUrls: ['./selects.component.scss']
})
export class SelectsComponent implements OnInit {

  selected1
  selected2


  callResult: any[]

  constructor(
    private someHttpCallsService: SomeHttpCallsService
  ) { }

  ngOnInit() {
  }

  onChange() {
    if ( this.selected2 && this.selected1 ) {
      // window.alert('Make HTTP call for: ' + this.selected1 + ', ' + this.selected2)
      this.someHttpCallsService.someCall(this.selected1, this.selected2).subscribe(result => {
        this.callResult = result.json()
        console.log('callResult', this.callResult)
      })
    }
  }
}
