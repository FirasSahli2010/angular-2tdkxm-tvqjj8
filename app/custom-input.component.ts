import { Component, OnInit } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'formly-field-custom-input',
  template: `
    <ng-container [ngSwitch]="field.type">
      <formly-field *ngSwitchCase="'input'"
        [model]="field.model"
        [form]="form"
        [field]="field"
        [options]="options">
      </formly-field>
      <formly-field *ngSwitchCase="'select'"
        [model]="field.model"
        [form]="form"
        [field]="field"
        [options]="options">
      </formly-field>
      <formly-field *ngSwitchCase="'textarea'"
        [model]="field.model"
        [form]="form"
        [field]="field"
        [options]="options">
      </formly-field>
    </ng-container>
  `,
})
export class FormlyFieldCustomInput extends FieldType implements OnInit {
  customField;

  ngOnInit() {
    this.field.wrappers = [];
  }
}



/**  Copyright 2018 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */