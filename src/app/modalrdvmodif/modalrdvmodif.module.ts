import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ModalrdvmodifPage } from './modalrdvmodif.page';

const routes: Routes = [
  {
    path: '',
    component: ModalrdvmodifPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ModalrdvmodifPage]
})
export class ModalrdvmodifPageModule {}
