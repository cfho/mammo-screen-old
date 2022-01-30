import { Injectable, OnInit } from "@angular/core";
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument,
} from "@angular/fire/compat/firestore";
import { Observable } from "rxjs";
import { Customer } from "./pages/apps/aio-table/interfaces/customer.model";
import { fieldsData } from "../app/pages/apps/aio-table/fields-data";

export interface Field {
  id: string;
  chinese: string;
  key: string;
  defaulValue: string;
  number: number;
  description: string;
  required: boolean;
  type: string;
}

export const deleteFields = [
  "id",
  "_031menopause_causes_2",
  "_031menopause_causes_3",
  "_031menopause_causes_4",
  "_031menopause_causes_5",
];

@Injectable({
  providedIn: "root",
})
export class FirebaseService {
  private itemsCollection: AngularFirestoreCollection<Customer>;
  private fieldsCollection: AngularFirestoreCollection<Field>;
  private personnelCollection: AngularFirestoreCollection;
  private countyCollection: AngularFirestoreCollection;
  private areaCollection: AngularFirestoreCollection;
  
  item: Observable<Customer>;

  // get fields with different styles;
  fieldsKeyArr;
  fieldsDetail: Field[]; // [{key: '_001ID_number', number: 10, ...}, {}, ...]
  fieldsHeaderObjArr: { header: string; key: string }[]; // [{header: '001', key: '_001ID_number'}, {}, ...]
  fieldsKeyNumberObj: {}; // {_001ID_number: "10", ...}
  personnelCodeObj: {}; // {陳達欣: '14138', ...}
  countyCodeObj: {}; // {台北市: '01', ...}
  areaCodeObj: {}; // {中正區: '01', ...}

  constructor(private afs: AngularFirestore) {
    this.itemsCollection = afs.collection<Customer>("toFirebase");
    this.fieldsCollection = afs.collection<Field>("fields");
    this.personnelCollection = afs.collection("personnel_code");
    this.countyCollection = afs.collection("county_code");
    this.areaCollection = afs.collection("area_code");
  }

  // return [{header: '001', key: '_001ID_number'}, {}, ...
  private setFieldsHeaderObjArr() {
    let header: { header: string; key: string }[] = [];
    fieldsData.map((key) =>
      header.push({ header: key.substring(1, 4), key: key })
    );
    this.fieldsHeaderObjArr = header;
    console.log(header);
  }

  // return {_001ID_number: 10, ...}
  private setFieldsKeyNumberObj(fieldsDetail) {
    let keyNumberObj = {} as { key: string; number: number };
    fieldsDetail.map((fieldObj) => {
      keyNumberObj[fieldObj.key] = fieldObj.number;
    });
    this.fieldsKeyNumberObj = keyNumberObj;
    deleteFields.map((key) => delete this.fieldsKeyNumberObj[key]);
    console.log(this.fieldsKeyNumberObj);
  }

  private getPersonnelCodeObj() {
    this.personnelCollection.valueChanges().subscribe((data) => {
      let newObj = {};
      // console.log(data);
      data.map((obj) => (newObj[obj['key']] = obj['code']));
      this.personnelCodeObj = newObj;
      console.log(this.personnelCodeObj);
    });
  }

  private getCountyCodeObj() {
    this.countyCollection.valueChanges().subscribe((data) => {
      let newObj = {};
      // console.log(data);
      data.map((obj) => (newObj[obj['key']] = obj['code']));
      this.countyCodeObj = newObj;
      console.log(this.countyCodeObj);
    });
  }

  private getAreaCodeObj() {
    this.areaCollection.valueChanges().subscribe((data) => {
      let newObj = {};
      // console.log(data);
      data.map((obj) => (newObj[obj['key']] = obj['code']));
      this.areaCodeObj = newObj;
      console.log(this.areaCodeObj);
    });
  }

  // return [{key: '_001ID_number', number: 10, ...}, {}, ...]
  getFields() {
    this.fieldsKeyArr = fieldsData;
    this.setFieldsHeaderObjArr();
    this.getPersonnelCodeObj();
    this.getCountyCodeObj();
    this.getAreaCodeObj();
    this.fieldsCollection.valueChanges().subscribe((data) => {
      this.fieldsDetail = data;
      this.setFieldsKeyNumberObj(data);
      console.log(this.fieldsDetail);
    });
  }

  getAllItems() {
    return this.itemsCollection.valueChanges({ idField: "id" });
  }

  updateItem(customer: Customer) {
    const path = customer.id;
    // this.afs.doc<Customer>("toFirebase/" + path).update(customer);
    this.afs.doc<Customer>("toFirebase/" + path).set(customer);
  }

  newItem(customer: Customer) {
    const path = customer.id;
    this.afs.doc<Customer>("toFirebase/" + path).update(customer);
  }

  deleteItem(customer: Customer) {
    const path = customer.id;
    this.afs.doc<Customer>("toFirebase/" + path).delete();
  }
}
