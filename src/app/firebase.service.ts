import { Injectable } from "@angular/core";
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
  number: number;
  description: string;
  required: boolean;
}

@Injectable({
  providedIn: "root",
})
export class FirebaseService {
  private itemsCollection: AngularFirestoreCollection<Customer>;
  private fieldsCollection: AngularFirestoreCollection<Field>;
  // private itemDoc: AngularFirestoreDocument<Customer>;
  item: Observable<Customer>;

  constructor(private afs: AngularFirestore) {
    this.itemsCollection = afs.collection<Customer>("toFirebase");
    this.fieldsCollection = afs.collection<Field>("fields");
  }

  getFields() {
    return this.fieldsCollection.valueChanges();
  }

  getAllItems() {
    return this.itemsCollection.valueChanges({ idField: "id" });
  }

  updateItem(customer: Customer) {
    const path = customer.id;
    this.afs.doc<Customer>("toFirebase/" + path).update(customer);
  }

  newItem(customer: Customer) {
    const path = customer.id;
    this.afs.doc<Customer>("toFirebase/" + path).update(customer);
  }

  deleteItem(customer: Customer) {
    const path = customer.id;
    this.afs.doc<Customer>("toFirebase/" + path).delete()
  }
}
