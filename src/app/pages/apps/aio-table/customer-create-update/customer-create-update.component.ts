import { Component, Inject, OnInit, ViewEncapsulation } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
} from "@angular/forms";
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
// import data from "@iconify/icons-ic/twotone-more-vert";



@Component({
  selector: "vex-customer-create-update",
  templateUrl: "./customer-create-update.component.html",
  styleUrls: ["./customer-create-update.component.scss"],
  // encapsulation: ViewEncapsulation.None
})
export class CustomerCreateUpdateComponent implements OnInit {
  form = new FormGroup({});
  model: Customer;
  fields: FormlyFieldConfig[] = JSONdata;
  options: FormlyFormOptions = {
    formState: {
      disabled: true,
    },
  };

  fieldsDetail: Field[];
  menopuaseCausesObj = {
    2: "_031menopause_causes_2",
    3: "_031menopause_causes_3",
    4: "_031menopause_causes_4",
    5: "_031menopause_causes_5",
  };

  deleteFields = [
    "id",
    "_031menopause_causes_2",
    "_031menopause_causes_3",
    "_031menopause_causes_4",
    "_031menopause_causes_5",
  ];

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
    @Inject(MAT_DIALOG_DATA) public defaults: Customer,
    private dialogRef: MatDialogRef<CustomerCreateUpdateComponent>,
    private fb: FormBuilder,
    private afService: FirebaseService
  ) {
    this.fieldsDetail = this.afService.fieldsDetail;
  }

  ngOnInit() {
    // this.fillSpaces(this.defaults);
    if (this.defaults) {
      this.mode = "update";
      this.menopauseCausesSplit();
      this.firebaseToFormly();
      this.model = this.defaults;
    } else {
      this.defaults = {} as Customer;
    }
  }


  firebaseToFormly() {
    const checkboxFieldsArr = this.fieldsDetail
      .filter((obj) => obj.type === "checkbox")
      .map((obj) => obj.key);
    if (this.defaults._046isNoExam == "") {
      this.defaults._046isNoExam = "1";
    }
    checkboxFieldsArr.map((key) => {
      if (this.defaults[key] == "T" || this.defaults[key] == "1") {
        this.defaults[key] = true;
      } else {
        this.defaults[key] = false;
      }
    });
    console.log(this.defaults);
  }

  formlyToFirebase() {
    const checkboxFieldsArr = this.fieldsDetail
      .filter((obj) => obj.type === "checkbox")
      .map((obj) => obj.key);
    checkboxFieldsArr.map((key) => {
      if (this.model[key] == true) {
        this.model[key] = "T";
      } else {
        this.model[key] = " ";
      }
    });
    console.log(this.model);
  }

  fillSpaces(obj: Customer) {
    let keyNumberObj = {};

    this.fieldsDetail.map((fieldObj) => {
      keyNumberObj[fieldObj.key] = fieldObj.number;
    });
    Object.keys(obj)
      .filter((key) => this.deleteFields.indexOf(key) == -1)
      .map((key) => {
        // console.log("資料key： " + key);
        // console.log("資料value長： " + obj[key].length);
        // console.log("預計value長： " + keyNumberObj[key]);
        // console.log(obj[key]);
        obj[key] = obj[key].padEnd(+keyNumberObj[key]);
        // console.log('處理后資料value長： ' + obj[key].length);
        // console.log(obj[key]);
      });
  }

  removeAbnormForm(obj: Customer) {
    if (obj._058mammo_category == "1" || obj._058mammo_category == "2") {
      Object.entries(obj)
        .filter((item) => +item[0].substring(1, 4) > 62)
        .map((item) => delete obj[item[0]]);

      // Object.entries(obj).map((item) => {
      //   if (+item[0].substring(1, 4) > 62) {
      //     delete obj[item[0]];
      //   }
      // });
    }
  }

  menopauseCausesSplit() {
    const data: string = this.defaults._031menopause_causes;
    Object.keys(this.menopuaseCausesObj).map((key) => {
      if (data.indexOf(key) > -1) {
        this.defaults[this.menopuaseCausesObj[key]] = true;
      } else {
        this.defaults[this.menopuaseCausesObj[key]] = false;
      }
    });
  }

  menopauseCausesSum() {
    let arr = [];

    Object.entries(this.menopuaseCausesObj)
      .filter((item) => this.model[item[1]] == true)
      .map((item) => arr.push(item[0]));
    this.model._031menopause_causes = arr.join("");
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
    // const customer: Customer = this.form.value;
    const customer: Customer = this.model;
    this.menopauseCausesSum();
    this.formlyToFirebase();
    this.removeAbnormForm(customer);
    this.fillSpaces(customer);
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
  }
}
