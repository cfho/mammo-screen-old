import { Component, Inject, OnInit, ViewEncapsulation } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, ValidationErrors } from "@angular/forms";
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
import { FormlyFieldConfig, FormlyFormOptions } from "@ngx-formly/core";

import JSONdata from "./dynamic-form.json";



@Component({
  selector: "vex-customer-create-update",
  templateUrl: "./customer-create-update.component.html",
  styleUrls: ["./customer-create-update.component.scss"],
  // encapsulation: ViewEncapsulation.None
})
export class CustomerCreateUpdateComponent implements OnInit {
  form = new FormGroup({});
  model: {};
  fields: FormlyFieldConfig[] = JSONdata;
  options: FormlyFormOptions = {
    formState: {
      disabled: true,
    },
  };

  menopuaseCausesObj = {
    2: '_031menopause_causes_2',
    3: '_031menopause_causes_3',
    4: '_031menopause_causes_4',
    5: '_031menopause_causes_5'
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

  constructor(
    @Inject(MAT_DIALOG_DATA) public defaults: any,
    private dialogRef: MatDialogRef<CustomerCreateUpdateComponent>,
    private fb: FormBuilder,
    private afService: FirebaseService
  ) {}

  ngOnInit() {
    
    if (this.defaults) {
      this.menopauseCauses(this.defaults);
      this.mode = "update";
      for (const [key, value] of Object.entries(this.defaults)) {
        if(+key.substring(1, 4) < 63 ){
          // console.log(key.substring(1, 4));
          continue;
        }
        if (value === "T") {
          this.defaults[key] = true;
        } else if (value === " " || value === "") {
          this.defaults[key] = false;
        }
      }
      this.model = this.defaults;
      console.log(this.model);
    } else {
      this.defaults = {} as Customer;
    }
  }

  menopauseCauses(data: Customer ) {
    const arr = data._031menopause_causes.split("");
    arr.map(val => {
      const key = this.menopuaseCausesObj[val];
      this.defaults[key] = true;
    })
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

  formlyToFirebase(customer) {
    for (const [key, value] of Object.entries(customer)) {
      if (value === true) {
        // console.log(key);
        customer[key] = "T";
      } else if (value === false || value === undefined) {
        // console.log(key);
        customer[key] = " ";
      }
    }
  }

  firebaseToFormly() {

  }

  updateCustomer() {
    const customer: Customer = this.form.value;
    console.log(customer);
    if (customer._031menopause_causes_2) {
      let dataArr = [];
      Object.values(this.menopuaseCausesObj).map(key => {
        if(customer[key] === true){
          // const last = key.charAt(key.length - 1);
          dataArr.push(this.menopuaseCausesObj[key])
          console.log(dataArr);
        }
        customer['_031menopause_causes'] = dataArr.join("");
        console.log(customer._031menopause_causes);
      }) 
    } else {
      customer['_031menopause_causes'] = "    ";
    }

    this.formlyToFirebase(customer);

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

  toggleDisabled() {
    this.options.formState.disabled = !this.options.formState.disabled;
    console.log(this.options.formState.disabled)
  }
}
