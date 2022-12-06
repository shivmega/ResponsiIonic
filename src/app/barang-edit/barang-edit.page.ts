import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-barang-edit',
  templateUrl: './barang-edit.page.html',
  styleUrls: ['./barang-edit.page.scss'],
})
export class barangEditPage implements OnInit {
  id: any;
  nama_barang: any;
  harga: any;
  stok: any;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public _apiService: ApiService
  ) {
    this.route.params.subscribe((param: any) => {
      this.id = param.id;
      console.log(this.id);
      this.ambilBarang(this.id);
    });
  }
  ngOnInit() {}
  ambilBarang(id: any) {
    this._apiService.lihat(id, '/lihatBarang.php?id=').subscribe({
      next: (hasil: any) => {
        console.log('sukses', hasil);
        let barang = hasil;
        this.nama_barang = barang.nama_barang;
        this.harga = barang.harga;
        this.stok = barang.stok;
      },
      error: (error: any) => {
        this._apiService.notif('gagal ambil data');
      },
    });
  }
  editBarang() {
    let data = {
      nama_barang: this.nama_barang,
      harga: this.harga,
      stok: this.stok,
    };
    this._apiService.edit(data, '/editBarang.php').subscribe({
      next: (hasil: any) => {
        console.log(hasil);
        this.id = '';
        this.nama_barang = '';
        this.harga = '';
        this.stok = '';
        this._apiService.notif('berhasil edit Barang');
        this.router.navigateByUrl('/barang');
      },
      error: (err: any) => {
        this._apiService.notif('gagal edit Barang');
      },
    });
  }
}
