import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BarangEditPageRoutingModule } from './barang-edit-routing.module';

import { barangEditPage } from './barang-edit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BarangEditPageRoutingModule,
  ],
  declarations: [barangEditPage],
})
export class BarangEditPageModule {}
