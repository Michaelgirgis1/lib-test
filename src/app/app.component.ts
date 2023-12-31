import { Component, TemplateRef, ViewChild, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormFieldCheckbox, FormFieldInput, FormFieldRadioButton, FormFieldTextarea, FormFieldToggle } from 'ngx-mui-kit/components/muk-form/classes';
import { MukInputComponent } from 'ngx-mui-kit/components/muk-form/muk-fields/muk-input';
import { Validators } from '@angular/forms';
// import { MukRadioButtonComponent } from 'ngx-mui-kit/components/muk-form/muk-fields/muk-radio-button';
// import { MukDateRangerComponent } from 'ngx-mui-kit/components/muk-form/muk-fields/muk-range-date-picker';

import { MukTextareaComponent } from 'ngx-mui-kit/components/muk-form/muk-fields/muk-textarea';

import { MukToggleComponent } from 'ngx-mui-kit/components/muk-form/muk-fields/muk-toggle';

import { MukListLoopingComponent } from "ngx-mui-kit/components/muk-list-looping";
import { MukModalComponent } from "ngx-mui-kit/components/muk-modal";


import { MatDialog } from "@angular/material/dialog";

import {DialogTestComponent} from "./dialog-test/dialog-test.component";


import { ButtonType,  IButton,  MukButtonTypes,  MukThemePalette, TooltipPositions, } from "ngx-mui-kit/components/muk-button";


interface IData {
  title?: string;
  message?: string;
  headerBg?: boolean;
  content: TemplateRef<unknown> | null;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MukInputComponent, MukModalComponent, DialogTestComponent
    ,MukTextareaComponent, MukToggleComponent, MukListLoopingComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'library-try';
  formField = new FormFieldInput({
    label: 'Password',
    placeholder: 'Please Enter Your Password Here.',
    key: 'password',
    value: '',
    class: 'col-md-12',
    parent: 'one',
    validators: [Validators.required],
    // isDisabled: false,
    fieldConfig: {
      type: 'password',
    }
  })
  formField2 = new FormFieldTextarea({
    label: 'Textarea',
    placeholder: 'Please Enter Your Text Here.',
    key: 'textarea',
    value: 'test',
    validators: [Validators.required],
    parent: 'one',
    parentClass: 'test',
    class: 'col-md-12',
    // isDisabled: false,
    fieldConfig: {
      isWhiteMode: true,
      isReadOnly: false,
      rows: 6,
      columns: 1,
    },
  })

  private dialog: MatDialog = inject(MatDialog);
  @ViewChild("content", { static: true }) content!: TemplateRef<unknown>;

  // config: IButton = {
  //   text: "Approved",
  //   isMukStatus: true,
  //   matType: MukButtonTypes.Flat,
  //   type: ButtonType.Button,
  //   className: "stc-success__approved",
  //   toolTip: {
  //     position: TooltipPositions.Below,
  //     toolTip: "Test",
  //   },
  // };

  // openDialog() {
  //   let dialogRef = this.dialog.open(MukModalComponent, {
  //     height: "400px",
  //     width: "600px",
  //     data: {
  //       title: "Add Employee",
  //       message: "",
  //       headerBg: true,
  //       content: this.content,
  //       component: DialogTestComponent,
  //     },
  //   })
  // }

  // formField3 = new FormFieldToggle({
  //   label: 'Toggle',
  //   key: 'toggle',
  //   value: true,
  //   validators: [Validators.required],
  //   parent: 'one',
  //   parentClass: 'test',
  //   // isDisabled: false
  // })
  // formFieldRadio = new FormFieldRadioButton({
  //   value: true,
  //   key: 'radio',
  //   label: 'Radio Examble',
  //   class: 'col-md-12',
  //   parent: 'one',
  //   // isDisabled: false,
  //   fieldConfig: {
  //     optionsConfig: {
  //       labelPath: 'name',
  //       valuePath: 'value'
  //     },
  //     options: [
  //       { name: 'Radio 1', value: 5 },
  //       { name: 'Radio 2', value: 6 },
  //     ],
  //   }
  // })
}
