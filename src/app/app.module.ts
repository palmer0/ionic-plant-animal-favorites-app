import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

// import { SETTINGS as SETTINGS_FIRESTORE } from '@angular/fire/compat/firestore';
// import firebase from 'firebase/compat/app'

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
// import { provideAuth,getAuth } from '@angular/fire/auth';
// import { provideFirestore,getFirestore } from '@angular/fire/firestore';
// import { provideStorage,getStorage } from '@angular/fire/storage';
// import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
// import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDMg3i_HPHF6ZGVLYFgupLT4Y5jipK-1Tg',
  authDomain: 'favoritos-plantas-animales.firebaseapp.com',
  projectId: 'favoritos-plantas-animales',
  storageBucket: 'favoritos-plantas-animales.appspot.com',
  messagingSenderId: '820281706374',
  appId: '1:820281706374:web:71eb036401773259e50e07',
};

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    // provideFirebaseApp(() => initializeApp(environment.firebase)),
    // provideAuth(() => getAuth()),
    // provideFirestore(() => getFirestore()),
    // provideStorage(() => getStorage())
    AngularFireModule.initializeApp(firebaseConfig),
    //AngularFireAuthModule,
    AngularFirestoreModule,

  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },

    /* {
      provide: SETTINGS_FIRESTORE,
      useValue: {
        experimentalforcelongpolling: true,
      } as firebase.firestore.Settings,
    }, */
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
