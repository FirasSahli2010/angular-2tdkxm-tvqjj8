import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'formly-app-example',
  templateUrl: './app.component.html',
})
export class AppComponent {
  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[] = [
    {
      key: 'type',
      type: 'select',
      templateOptions: {
        label: 'Type',
        required: true,
        options: [
          { label: 'select', value: 'select' },
          { label: 'input', value: 'input' },
          { label: 'textarea', value: 'textarea' },
        ],
      },
    },
    {
      key: 'custom',
      type: 'custom',
      templateOptions: {
        label: 'Custom inlined',
        options: [
          { label: 'option1', value: 'option1' },
          { label: 'option2', value: 'option2' },
        ],
      },
      hideExpression: '!model.type',
      expressionProperties: {
        'type': 'model.type',
      },
    },
  ];

  submit() {
    if (this.form.valid) {
      alert(JSON.stringify(this.model));
    }
  }
}


/**  Copyright 2018 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */