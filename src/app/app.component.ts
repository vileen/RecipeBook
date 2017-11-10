import {Component, OnInit} from '@angular/core';

import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  // loadedFeature = 'recipe';
  //
  // onNavigate(feature: string) {
  //   this.loadedFeature = feature;
  // }

  ngOnInit(): void {
    firebase.initializeApp({
      apiKey: "AIzaSyBOT_h-gMEmGYsG8UsxWNIdb0eTHV5knSI",
      authDomain: "ng-recipe-book-4859c.firebaseapp.com",
      databaseURL: "https://ng-recipe-book-4859c.firebaseio.com",
      projectId: "ng-recipe-book-4859c",
      storageBucket: "ng-recipe-book-4859c.appspot.com",
      messagingSenderId: "605638182106"
    });
  }
}
