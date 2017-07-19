import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import {FormBuilder, Validators} from '@angular/forms';
import {FirebaseService} from "../../services/firebase-service";
import {EmailValidator} from '../../providers/email';
import {HomePage} from '../../pages/home/home';

@Component({
  selector: 'signup-page',
  templateUrl: 'signup.html'
})
export class SignUpPage {
  public loginForm: any;

  user = {
    email: '',
    password: ''
  };

  errors: any = {
    email: false,
    password: false
  }

  loading: any;

  constructor(public navCtrl: NavController, public fbService: FirebaseService, public formBuilder: FormBuilder, public loadingCtrl: LoadingController) {
    this.loginForm = formBuilder.group({
      email: ['', Validators.compose([Validators.required,
        EmailValidator.isValid])],
      password: ['', Validators.compose([Validators.minLength(6),
        Validators.required])]
    });
  }

  ngOnInit() {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

  }

  signUp() {
    if (this.user.email && this.user.password) {
      this.loading = this.loadingCtrl.create({
        content: 'Signing you up...'
      });

      this.loading.present();

      this.fbService.signUp(this.user)
        .then(response => {
          this.loading.dismiss();
          this.navCtrl.push(HomePage)
        })
        .catch(error => console.log('error', error));
    }
  }

}