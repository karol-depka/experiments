import {Component, forwardRef, OnInit} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms'

export class CustomValue {
  a: string
  b: string[]
}

@Component({
  selector: 'app-custom-form-component',
  templateUrl: './custom-form-component.component.html',
  styleUrls: ['./custom-form-component.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CustomFormComponentComponent),
      multi: true,
    }
  ],
})
export class CustomFormComponentComponent implements OnInit, ControlValueAccessor {

  value: CustomValue

  propagateChange = (_: any) => {}

  constructor() {

  }

  ngOnInit() {
  }

  registerOnChange(fn) {
    this.propagateChange = fn
  }

  writeValue(value: CustomValue) {
    this.value = value
  }

  registerOnTouched(fn: any) {
    // no-op
  }

}
