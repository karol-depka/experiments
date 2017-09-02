import {Component, HostListener, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms'
import {NestedFormComponent} from './nested-form/nested-form.component'

@Component({
  selector: 'app-check-forms',
  templateUrl: './check-forms.component.html',
  styleUrls: ['./check-forms.component.scss']
})
export class CheckFormsComponent implements OnInit {

  myForm: FormGroup

  // @ViewChild(NestedFormComponent) nestedComponent: NestedFormComponent

  constructor(
    private fb: FormBuilder
  ) {
    this.initForm()
  }

  ngOnInit() {
  }

  private initForm() {
    // https://scotch.io/tutorials/how-to-build-nested-model-driven-forms-in-angular-2
    // https://angular.io/api/forms/FormGroupName
    // https://medium.com/spektrakel-blog/angular2-building-nested-reactive-forms-7978ecd145e4
    this.myForm = this.fb.group({
      // nestedFormGroupName: this.createSubFormDefinition()
      nestedFormGroupName: this.fb.group({
        customItem: {
          a: 'aa', b: ['b']
        }
      })
    })
  }

  private createSubFormDefinition() {
    return {
      customItem: this.fb.group({ a: 'aa', b: ['b'] })
      // customItem: this.fb.group({ a: 'aa', b: ['b', 'c'] })
    }
  }

  private changeFormValue() {
    this.myForm.setValue({
      nestedFormGroupName: {
        customItem: {
          a: 'updated', b: ['upd1', 'upd']
        }
      }
    })
  }

  @HostListener('window:beforeunload', ['$event'])
  handleBeforeUnload($event) {
    if ( this.myForm.dirty ) {
      $event.returnValue = 'Your data will be lost!';
    }
    // https://www.chromestatus.com/feature/5349061406228480
    // https://stackoverflow.com/questions/40719711/prevent-closing-browser-tab-when-form-is-dirty-in-angular-2

    /* Worked with returnValue: https://stackoverflow.com/a/39205395/170451 */
    // if (connected) {
    //   return "You have unsaved data changes. Are you sure to close the page?"
    // }
  }

  save() {
    this.myForm.markAsPristine()
  }

}
