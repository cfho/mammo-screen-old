import { Injectable, OnInit } from "@angular/core";
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument,
} from "@angular/fire/compat/firestore";
import roundToNearestMinutesWithOptions from "date-fns/esm/fp/roundToNearestMinutesWithOptions/index.js";
import { Observable } from "rxjs";
import { Customer } from "./pages/apps/aio-table/interfaces/customer.model";

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

@Injectable({
  providedIn: "root",
})
export class FirebaseService {
  private itemsCollection: AngularFirestoreCollection<Customer>;
  private fieldsCollection: AngularFirestoreCollection<Field>;
  // private itemDoc: AngularFirestoreDocument<Customer>;
  item: Observable<Customer>;
  fieldsDetail: Field[];

  constructor(private afs: AngularFirestore) {
    this.itemsCollection = afs.collection<Customer>("toFirebase");
    this.fieldsCollection = afs.collection<Field>("fields");
  }

  getFields() {
    this.fieldsCollection.valueChanges().subscribe((data) => {
      this.fieldsDetail = data;
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
