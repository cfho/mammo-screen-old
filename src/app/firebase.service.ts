import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Customer } from "./pages/apps/aio-table/interfaces/customer.model";


@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  private itemsCollection: AngularFirestoreCollection<Customer>;
  constructor(private afs: AngularFirestore) {
    this.itemsCollection = afs.collection<Customer>('toFirebase');
   }

  getAllItems() {
    return this.itemsCollection.valueChanges({ idField: 'id' });
  }
}
