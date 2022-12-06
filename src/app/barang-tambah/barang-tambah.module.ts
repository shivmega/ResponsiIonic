import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BarangTambahPageRoutingModule } from './barang-tambah-routing.module';

import { barangTambahPage } from './barang-tambah.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BarangTambahPageRoutingModule,
  ],
  declarations: [barangTambahPage],
})
export class BarangTambahPageModule {}
