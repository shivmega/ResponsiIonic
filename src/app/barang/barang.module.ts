import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BarangPageRoutingModule } from './barang-routing.module';

import { barangPage } from './barang.page';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, BarangPageRoutingModule],
  declarations: [barangPage],
})
export class BarangPageModule {}
