import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { barangPage } from './barang.page';

const routes: Routes = [
  {
    path: '',
    component: barangPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BarangPageRoutingModule {}
