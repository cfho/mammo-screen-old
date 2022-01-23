import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import {
  ReactiveFormsModule,
  FormControl,
  ValidationErrors,
} from "@angular/forms";
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatButtonModule } from "@angular/material/button";
import { MatDialogModule } from "@angular/material/dialog";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatRadioModule } from "@angular/material/radio";
import { MatSelectModule } from "@angular/material/select";
import { MatCheckboxModule } from "@angular/material/checkbox";

import { CustomerCreateUpdateComponent } from "./customer-create-update.component";
import { MatMenuModule } from "@angular/material/menu";
import { IconModule } from "@visurel/iconify-angular";
import { MatDividerModule } from "@angular/material/divider";
import { SharedModule } from "./shared/shared.module";
import { FormlyFieldTabs } from "./tabs.type";

import {
  FormlyModule,
  FormlyFieldConfig,
  FORMLY_CONFIG,
} from "@ngx-formly/core";
import { FormlyMaterialModule } from "@ngx-formly/material";

// formly functions
export function minValidationMessage(err, field) {
  return `Please provide a value bigger than ${err.min}. You provided ${err.actual}`;
}

export function minlengthValidationMessage(err, field) {
  return `Should have atleast ${field.templateOptions.minLength} characters`;
}


export function maxlengthValidationMessage(err, field) {
  // console.log(err);
  return `必須小於或等於 ${field.templateOptions.maxLength} 個數`;
}

export function idValidator(control: FormControl): ValidationErrors {
  return /^[A-Z][0-9]{9}/.test(control.value) ? null : { id: true };
}

export function idValidatorMessage(err, field: FormlyFieldConfig) {
  return `"${field.formControl.value}" 不是正確的身份證號`;
}
export function dayValidator(control: FormControl): ValidationErrors {
  return /[0-9]{7}/.test(control.value) ? null : { day: true };
}

export function dayValidatorMessage(err, field: FormlyFieldConfig) {
  return `"${field.formControl.value}" YYYMMDD 民國年月日,例如 1110101`;
}

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatDialogModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatRadioModule,
    MatSelectModule,
    MatMenuModule,
    MatCheckboxModule,
    IconModule,
    MatDividerModule,
    FormlyModule.forRoot({
      types: [{ name: "tabs", component: FormlyFieldTabs }],
      validators: [
        { name: "id", validation: idValidator },
        { name: "day", validation: dayValidator }
      ],
      validationMessages: [
        { name: "required", message: "這是必填資料" },
        { name: "min", message: minValidationMessage },
        { name: "minlength", message: minlengthValidationMessage },
        { name: 'maxlength', message: maxlengthValidationMessage },
        { name: "id", message: idValidatorMessage },
        { name: "day", message: dayValidatorMessage },
      ],
    }),
    FormlyMaterialModule,
  ],
  declarations: [CustomerCreateUpdateComponent, FormlyFieldTabs],
  entryComponents: [CustomerCreateUpdateComponent],
  exports: [CustomerCreateUpdateComponent],
})
export class CustomerCreateUpdateModule {}
