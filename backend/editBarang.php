<?php
require 'koneksi.php';
$input = file_get_contents('php://input');
$data = json_decode($input, true);
$pesan = [];
$id = trim($data['id']);
$nama_barang = trim($data['nama_barang']);
$harga = trim($data['harga']);
$stok = trim($data['stok']);

if ($nama_barang != '' and $harga != '' and $stok != '') {
    $query = mysqli_query($con, "update barang set nama_barang='$nama_barang',harga='$harga', stok='$stok' where id=4");
    $pesan['status'] = 'berhasil';
} else {
    $pesan['status'] = 'gagal';
}
echo json_encode($pesan);
echo mysqli_error($con);
