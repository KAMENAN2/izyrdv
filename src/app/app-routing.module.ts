import { NgModule } from '@angular/core';
<<<<<<< HEAD
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'root', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'rdv', loadChildren: './rdv/rdv.module#RdvPageModule' },
  { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardPageModule' },
  { path: 'list-rdv', loadChildren: './list-rdv/list-rdv.module#ListRdvPageModule' },
  { path: 'checkrdv', loadChildren: './checkrdv/checkrdv.module#CheckrdvPageModule' },
  { path: 'modalrdvmodif', loadChildren: './modalrdvmodif/modalrdvmodif.module#ModalrdvmodifPageModule' }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
=======
import { Routes, RouterModule } from '@angular/router';
import {DepartementComponent} from './departement/departement.component';
import {AppComponent} from './app.component';


const routes: Routes = [
  {path:'departement',component:DepartementComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
>>>>>>> 75e067ca023a3c73cabf48759631afaddbbbb9de
  exports: [RouterModule]
})
export class AppRoutingModule { }
