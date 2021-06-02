import { Component } from '@angular/core';
import { firebase } from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // Your web app's Firebase configuration
  firebaseConfig = {
    apiKey: "AIzaSyCVKxK8FpwU2q9ru5xh4moCFKEMusZgFBk",
    authDomain: "angular-efe7e.firebaseapp.com",
    projectId: "angular-efe7e",
    storageBucket: "angular-efe7e.appspot.com",
    messagingSenderId: "19167489317",
    appId: "1:19167489317:web:2da2bdcf8593a6539cbecc"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
}
