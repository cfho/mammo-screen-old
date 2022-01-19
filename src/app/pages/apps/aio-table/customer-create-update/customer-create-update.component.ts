import { Component, Inject, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { Customer } from "../interfaces/customer.model";
import icMoreVert from "@iconify/icons-ic/twotone-more-vert";
import icClose from "@iconify/icons-ic/twotone-close";
import icPrint from "@iconify/icons-ic/twotone-print";
import icDownload from "@iconify/icons-ic/twotone-cloud-download";
import icDelete from "@iconify/icons-ic/twotone-delete";
import icPhone from "@iconify/icons-ic/twotone-phone";
import icPerson from "@iconify/icons-ic/twotone-person";
import icMyLocation from "@iconify/icons-ic/twotone-my-location";
import icLocationCity from "@iconify/icons-ic/twotone-location-city";
import icEditLocation from "@iconify/icons-ic/twotone-edit-location";
import { Field, FirebaseService } from "src/app/firebase.service";
import { FormlyFieldConfig } from "@ngx-formly/core";

import data from './dynamic-form.json';


@Component({
  selector: "vex-customer-create-update",
  templateUrl: "./customer-create-update.component.html",
  styleUrls: ["./customer-create-update.component.scss"],
})
export class CustomerCreateUpdateComponent implements OnInit {

  form = new FormGroup({});
  model: {};
  fields: FormlyFieldConfig[] = data;

  onSubmit({ valid, value }) {
    console.log(value);
  }

  static id = 100;

  mode: "create" | "update" = "create";

  icMoreVert = icMoreVert;
  icClose = icClose;

  icPrint = icPrint;
  icDownload = icDownload;
  icDelete = icDelete;

  icPerson = icPerson;
  icMyLocation = icMyLocation;
  icLocationCity = icLocationCity;
  icEditLocation = icEditLocation;
  icPhone = icPhone;

  // pastHistory = ["無", "乳房良性相關疾病", "乳癌", "其他癌症："];

  constructor(
    @Inject(MAT_DIALOG_DATA) public defaults: any,
    private dialogRef: MatDialogRef<CustomerCreateUpdateComponent>,
    private fb: FormBuilder,
    private afService: FirebaseService
  ) {}

  ngOnInit() {
    
    if (this.defaults) {
      this.mode = "update";
      this.model = this.defaults;
      console.log(this.mode);
      console.log(this.model);
    } else {
      this.defaults = {} as Customer;
    }
  }

  save() {
    if (this.mode === "create") {
      this.createCustomer();
    } else if (this.mode === "update") {
      this.updateCustomer();
    }
  }

  createCustomer() {
    // const customer: Customer = this.form.value;

    // // if (!customer.imageSrc) {
    // //   customer.imageSrc = 'assets/img/avatars/1.jpg';
    // // }
    // customer.id = customer._001ID_number + "_" + customer._051mammo_day;
    // customer._020past_hx = this.pastHistory
    //   .indexOf(customer._020past_hx)
    //   .toString();
    // console.log(customer);
    // this.dialogRef.close(customer);
  }

  updateCustomer() {
    const customer: Customer = this.form.value;
    // customer._020past_hx = this.pastHistory
    //   .indexOf(customer._020past_hx)
    //   .toString();
    //   console.log(customer);

      // for (const [key, value] of Object.entries(customer)) {
      //   console.log(key)
      //   console.log(+key.substring(1,4))
      //   if(+key.substring(1,4)) {

          // const spaceNumber = this.fields[+key.substring(1,4)-1].number;
          // console.log(this.fields[+key.substring(1,4)])
          // console.log(spaceNumber);
          // customer[key] = value.toString().padEnd(spaceNumber).length;
        // }
      // }
      
      console.log(customer);
    
    customer.id = this.defaults.id;
    this.dialogRef.close(customer);
  }

  isCreateMode() {
    return this.mode === "create";
  }

  isUpdateMode() {
    return this.mode === "update";
  }
}
