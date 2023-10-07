import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

//data-base module
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { PageHomeComponent } from './pages/page-home/page-home.component';

@NgModule({
  declarations: [
    AppComponent,
    PageHomeComponent,
  ],
  imports: [
    AppRoutingModule,
    AngularFireDatabaseModule,
    MatSlideToggleModule,
    AngularFireModule.initializeApp({
      apiKey: 'AIzaSyCv9-TFTB37BpaXJ3uZ0981LNG-6kmwr1Y',
      authDomain: 'hackaton-nasa.firebaseapp.com',
      databaseURL: 'https://hackaton-nasa-default-rtdb.firebaseio.com',
      projectId: 'hackaton-nasa',
      storageBucket: 'hackaton-nasa.appspot.com',
      messagingSenderId: '867784725860',
      appId: '1:867784725860:web:8379531fea47900b89d671',
      measurementId: 'G-8PZRLGF9VE',
    }),
    BrowserModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
