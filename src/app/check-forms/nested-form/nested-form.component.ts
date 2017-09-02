import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms'

@Component({
  selector: 'app-nested-form',
  templateUrl: './nested-form.component.html',
  styleUrls: ['./nested-form.component.scss']
})
export class NestedFormComponent implements OnInit {

  @Input() nestedFormGroupName: string
  @Input() myFormGroup

  static createSubFormDefinition() {
    return {
      // customItem: this.fb.group({ a: 'aa', b: ['b', 'c'] })
    }
  }

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
  }

}
