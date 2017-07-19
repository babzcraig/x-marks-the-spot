import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

// Import the AF2 Module
import { AngularFireModule } from 'angularfire2';

// AF2 Settings
export const firebaseConfig = {
  apiKey: "AIzaSyDP-LoR9mYoyIQJJClH0hxpGCw6EW2motI",
  authDomain: "x-marks-the-spot-2a7b4.firebaseapp.com",
  databaseURL: "https://x-marks-the-spot-2a7b4.firebaseio.com",
  projectId: "x-marks-the-spot-2a7b4",
  storageBucket: "x-marks-the-spot-2a7b4.appspot.com",
  messagingSenderId: "62014686251"
};

// Pages and Components
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

// Providers
import { Geolocation } from '@ionic-native/geolocation';

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
