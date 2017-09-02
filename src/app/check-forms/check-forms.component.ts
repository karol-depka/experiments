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
    // $event.returnValue = 'Your data will be lost!';
    // https://www.chromestatus.com/feature/5349061406228480
    // https://stackoverflow.com/questions/40719711/prevent-closing-browser-tab-when-form-is-dirty-in-angular-2

    /* Worked with returnValue: https://stackoverflow.com/a/39205395/170451 */
    // if (connected) {
    //   return "You have unsaved data changes. Are you sure to close the page?"
    // }
  }

}
