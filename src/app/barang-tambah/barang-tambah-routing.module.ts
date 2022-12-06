import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { barangTambahPage } from './barang-tambah.page';

const routes: Routes = [
  {
    path: '',
    component: barangTambahPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BarangTambahPageRoutingModule {}
