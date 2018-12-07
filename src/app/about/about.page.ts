import { Component } from '@angular/core';

// import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import 'firebase/firestore';

@Component({
  selector: 'app-about',
  templateUrl: 'about.page.html',
  styleUrls: ['about.page.scss']
})
export class AboutPage {
  items: Observable<any[]>;

  constructor(private db: AngularFirestore) {
    this.items = this.db.collection('usersTest').valueChanges();
  }

  addItem() {
    this.db.collection("usersTest").add({
      first: "Ada",
      last: "Lovelace",
      ts: Date.now(),
      born: 1815
    })
      .then(function (docRef) {
        console.log("Document written with ID: ", docRef.id);
      })
      .catch(function (error) {
        console.error("Error adding document: ", error);
      });
  }
  viewItems() {

    this.items = this.db.collection('usersTest').valueChanges();
  }
}
