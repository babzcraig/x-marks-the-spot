import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {FirebaseService} from "../../services/firebase-service";

@Component({
  selector: 'home-page',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public fbService: FirebaseService) {

  }

}