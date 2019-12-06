import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'root', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'rdv', loadChildren: './rdv/rdv.module#RdvPageModule' },
  { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardPageModule' },
  { path: 'list-rdv', loadChildren: './list-rdv/list-rdv.module#ListRdvPageModule' },
  { path: 'checkrdv', loadChildren: './checkrdv/checkrdv.module#CheckrdvPageModule' }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
