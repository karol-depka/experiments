import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-selects',
  templateUrl: './selects.component.html',
  styleUrls: ['./selects.component.scss']
})
export class SelectsComponent implements OnInit {

  selected1
  selected2


  constructor() { }

  ngOnInit() {
  }

  onChange() {
    if ( this.selected2 && this.selected1 ) {
      window.alert('Make HTTP call for: ' + this.selected1 + ', ' + this.selected2)
    }
  }
}
