import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DepartementComponent} from './departement/departement.component';
import {AppComponent} from './app.component';


const routes: Routes = [
  {path:'departement',component:DepartementComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
