import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { barangEditPage } from './barang-edit.page';

const routes: Routes = [
  {
    path: '',
    component: barangEditPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BarangEditPageRoutingModule {}
