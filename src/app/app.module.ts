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
  bootstrap: [AppComponent]
})
export class AppModule {}
