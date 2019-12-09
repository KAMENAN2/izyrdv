<<<<<<< HEAD
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {FormsModule} from "@angular/forms";
import {DatePicker} from "@ionic-native/date-picker/ngx";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { ListRdvPipe } from './list-rdv.pipe';
import {registerLocaleData} from "@angular/common";
import localeFr from '@angular/common/locales/fr';
registerLocaleData(localeFr, 'fr');


@NgModule({
  declarations: [AppComponent, ListRdvPipe],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,FormsModule ,HttpClientModule],
  providers: [
    StatusBar,
    SplashScreen,DatePicker,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },


  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
=======
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { DepartementComponent } from './departement/departement.component';
import {NgxSpinnerModule} from 'ngx-spinner';

@NgModule({
  declarations: [
    AppComponent,
    DepartementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule,FormsModule,NgxSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
>>>>>>> 75e067ca023a3c73cabf48759631afaddbbbb9de
