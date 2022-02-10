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
import edit from "@iconify/icons-ic/edit";
import icDelete from "@iconify/icons-ic/twotone-delete";
import icPhone from "@iconify/icons-ic/twotone-phone";
import icPerson from "@iconify/icons-ic/twotone-person";
import icMyLocation from "@iconify/icons-ic/twotone-my-location";
import icLocationCity from "@iconify/icons-ic/twotone-location-city";
import icEditLocation from "@iconify/icons-ic/twotone-edit-location";
import { FirebaseService } from "src/app/firebase.service";
import { FormlyFieldConfig, FormlyFormOptions } from "@ngx-formly/core";

import JSONdata from "./dynamic-form.json";
import fieldsDetail from "../../../../../static-data/fieldsDetail.json";
import { log } from "console";
import { Field } from "../interfaces/field";
import { BehaviorSubject, Subject } from "rxjs";

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
  disabled: true;

  fieldsDetail: Field[];
  menopuaseCausesObj = {
    2: "_031menopause_causes_2",
    3: "_031menopause_causes_3",
    4: "_031menopause_causes_4",
    5: "_031menopause_causes_5",
  };

  transformItemsObj = {
    _043isTouch: {true: "1", false: " "},
    _044isMammo: {true: "1", false: " "},
    _045isSono: {true: "1", false: " "},
    _046isNoExam: {true: "1", false: " "},
    _048OP_left: {true: "1", false: "0"},
    _049OP_right: {true: "1", false: "0"},
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
  edit = edit;

  constructor(
    @Inject(MAT_DIALOG_DATA) public defaults: Customer,
    private dialogRef: MatDialogRef<CustomerCreateUpdateComponent>,
    private fb: FormBuilder,
    private afService: FirebaseService
  ) {
    // this.fieldsDetail = this.afService.fieldsDetail;
    this.fieldsDetail = fieldsDetail;
  }

  ngOnInit() {
    if (this.defaults) {
      this.mode = "update";
      this.countyAreaCode();
      this.nameCode();
      this.menopauseCausesSplit();
      this.firebaseToFormly();
      this.model = this.defaults;
    } else {
      this.defaults = {} as Customer;
    }
  }

  firebaseToFormly() {
    // console.log(this.fieldsDetail);
    const checkboxFieldsArr = this.fieldsDetail
      .filter((obj) => (obj.type === "checkbox")||(obj.type === "checkbox2"))
      .map((obj) => obj.key);
      // console.log(checkboxFieldsArr);
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
    this.transformFn();
    console.log(this.model);
  }

  transformFn() {
    Object.keys(this.transformItemsObj).map(key => {
      // console.log(key);
      // console.log(this.model);
      let value = this.model[key];
      if(!this.model[key]) {
        value = false;
      }
      this.model[key] = this.transformItemsObj[key][value];
      // console.log(this.model[key]);
    })
  }

  fillSpaces(obj: Customer) {
    const keyNumberObj = this.afService.fieldsKeyNumberObj;
    console.log(keyNumberObj);

    Object.keys(keyNumberObj)
      .filter((key) => obj[key])
      .map((key) => {
        // console.log("資料key： " + key);
        // console.log("資料value： " + obj[key]);
        // console.log("資料value長： " + obj[key].length);
        // console.log("預計value長： " + keyNumberObj[key]);
        obj[key] = obj[key].padEnd(+keyNumberObj[key]);
        // console.log('處理后資料value長： ' + obj[key].length);
        // console.log(obj[key]);
      });
    Object.keys(keyNumberObj)
      .filter((key) => !obj[key])
      .map((key) => {
        // console.log("no match");
        // console.log("資料key： " + key);
        // console.log("預計value長： " + keyNumberObj[key]);
        obj[key] = "".padEnd(+keyNumberObj[key]);
        // console.log('處理后資料value長： ' + obj[key].length);
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

  nameCode() {
    const drName: string = this.defaults.drName;
    const techName: string = this.defaults.techName;
    const personnelCodeObj = this.afService.personnelCodeObj;

    if (personnelCodeObj[drName]) {
      // this.defaults.drName = this.defaults._060report_Dr;
      this.defaults._060report_Dr = personnelCodeObj[drName];
    } else {
      alert(`報告醫師: ${drName}, 找不到`);
    }

    if (personnelCodeObj[techName]) {
      // this.defaults.techName = this.defaults._061technician;
      this.defaults._061technician = personnelCodeObj[techName];
    } else {
      alert(`放射師： ${techName}, 找不到`);
    }
  }

  countyAreaCode() {
    const data: string = this.defaults._006current_residence;
    const countyCode = data.substring(0, 3);
    const areaCode = data.substring(3, 6);
    const countyCodeObj = this.afService.countyCodeObj;
    const areaCodeObj = this.afService.areaCodeObj;

    if (countyCodeObj[countyCode] && areaCodeObj[areaCode]) {
      this.defaults._005current_area_code =
        countyCodeObj[countyCode] + areaCodeObj[areaCode];
    } else {
      alert(`地址: ${data}, 鄉鎮市找不到`);
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
    this.fillSpaces(customer);
    this.removeAbnormForm(customer);
    customer.readCheckbox = true;
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

  isReadToggle() {
    this.model.readCheckbox = !this.model.readCheckbox;
    console.log(this.model.readCheckbox);
  }
}
