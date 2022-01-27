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
  // private itemDoc: AngularFirestoreDocument<Customer>;
  item: Observable<Customer>;

  // get fields with different styles;
  fieldsKeyArr;
  fieldsDetail: Field[]; // [{key: '_001ID_number', number: 10, ...}, {}, ...]
  fieldsHeaderObjArr: { header: string; key: string }[]; // [{header: '001', key: '_001ID_number'}, {}, ...]
  fieldsKeyNumberObj: { key: string; number: number }; // {key: '_001ID_number', number: 10}, ...}

  constructor(private afs: AngularFirestore) {
    this.itemsCollection = afs.collection<Customer>("toFirebase");
    this.fieldsCollection = afs.collection<Field>("fields");
  }

  // return [{header: '001', key: '_001ID_number'}, {}, ...
  setFieldsHeaderObjArr() {
    let header: { header: string; key: string }[] = [];
    fieldsData.map((key) =>
      header.push({ header: key.substring(1, 4), key: key })
    );
    this.fieldsHeaderObjArr = header;
    console.log(header);
  }


  // return {key: '_001ID_number', number: 10}, ...}
  setFieldsKeyNumberObj(fieldsDetail) {
    let keyNumberObj = {} as { key: string; number: number };
    fieldsDetail.map((fieldObj) => {
      keyNumberObj[fieldObj.key] = fieldObj.number;
    });
    this.fieldsKeyNumberObj = keyNumberObj;
    deleteFields.map(key => delete this.fieldsKeyNumberObj[key]);
    console.log(this.fieldsKeyNumberObj);
  }

  // return [{key: '_001ID_number', number: 10, ...}, {}, ...]
  getFields() {
    this.fieldsKeyArr = fieldsData;
    this.setFieldsHeaderObjArr();
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
