import { Component } from '@angular/core';

interface FormField {
  label: string;
  name: string;
  type: string;
  required: boolean;
  options?: string[];
  optionsString?: string;
}

interface FormConfig {
  formName: string;
  fields: FormField[];
}

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
})
export class FormBuilderComponent {
  formConfig: FormConfig = {
    formName: '',
    fields: [],
  };

  fieldTypes = ['text', 'number', 'email', 'password', 'textarea', 'select', 'date', 'checkbox', 'radio'];
  newField: FormField = this.resetNewField();
  editingIndex: number | null = null;

  resetNewField(): FormField {
    return {
      label: '',
      name: '',
      type: '',
      required: false,
      optionsString: '',
    };
  }

  addField() {
    if (!this.newField.label || !this.newField.name || !this.newField.type) {
      alert('Please fill all required details.');
      return;
    }

    // Parse select options
    if (this.newField.type === 'select' && this.newField.optionsString) {
      this.newField.options = this.newField.optionsString.split(',').map(opt => opt.trim());
    }

    if (this.editingIndex !== null) {
      this.formConfig.fields[this.editingIndex] = { ...this.newField };
      this.editingIndex = null;
    } else {
      this.formConfig.fields.push({ ...this.newField });
    }

    this.newField = this.resetNewField();
  }

  editField(index: number) {
    this.newField = { ...this.formConfig.fields[index] };
    this.newField.optionsString = this.newField.options?.join(', ') || '';
    this.editingIndex = index;
  }

  removeField(index: number) {
    this.formConfig.fields.splice(index, 1);
  }

  saveForm() {
    console.log('Saved Form Config:', this.formConfig);
    alert('Form configuration saved! Check console for output.');
    // In real case: call backend API to save JSON
  }
}
