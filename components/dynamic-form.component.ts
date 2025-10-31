import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html'
})
export class DynamicFormComponent implements OnInit {
  @Input() formConfig: any;
  @Output() formSubmit = new EventEmitter<any>();
  formGroup!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.formGroup = this.fb.group({});
    this.formConfig.fields.forEach((field: any) => {
      const validators = this.mapValidators(field.validators);
      this.formGroup.addControl(field.name, this.fb.control('', validators));
    });
  }

  mapValidators(validatorsObj: any) {
    const validators = [];
    if (!validatorsObj) return validators;
    if (validatorsObj.required) validators.push(Validators.required);
    if (validatorsObj.minLength) validators.push(Validators.minLength(validatorsObj.minLength));
    if (validatorsObj.email) validators.push(Validators.email);
    return validators;
  }

  isInvalid(name: string) {
    const control = this.formGroup.get(name);
    return control?.touched && control.invalid;
  }

  getErrorMessage(name: string) {
    const control = this.formGroup.get(name);
    if (control?.errors?.['required']) return 'This field is required';
    if (control?.errors?.['email']) return 'Invalid email address';
    if (control?.errors?.['minlength']) return 'Minimum length required';
    return '';
  }

  submitForm() {
    if (this.formGroup.valid) {
      this.formSubmit.emit(this.formGroup.value);
    } else {
      this.formGroup.markAllAsTouched();
    }
  }
}
