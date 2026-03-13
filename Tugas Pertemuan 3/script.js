// memasukkan produk toko
let produkToko = [
  { id: 1, nama: "laptop", harga: 7000000, stok: 5 },
  { id: 2, nama: "Mouse", harga: 200000, stok: 10 },
  { id: 3, nama: "Keyboard", harga: 350000, stok: 7 },
];

// fungsi menambahkan produk
function tambahProduk(nama, harga, stok) {
  const idBaru = produkToko.length > 0 ? produkToko[produkToko.length - 1].id + 1 : 1;

  const produkBaru = {
    id: idBaru,
    nama: nama,
    harga: harga,
    stok: stok,
  };

  produkToko.push(produkBaru);
  console.log(`Berhasil Menambahkan Produk: ${nama}`);
}

// fungsi menghapus produk
function hapusProduk(id) {
  const index = produkToko.findIndex((produk) => produk.id === id);

  if (index !== -1) {
    const namaProduk = produkToko[index].nama;
    produkToko.splice(index, 1);
    console.log(`Berhasil Menghapus Produk: ${namaProduk} (ID: ${id}) `);
  } else {
    console.log(`Produk dengan ID ${id} tidak ditemukan.`);
  }
}

// fungsi menampilkan produk
function tampilkanProduk() {
  console.log("---Daftar Produk---");
  if (produkToko.length === 0) {
    console.log("stock kosong");
  } else {
    produkToko.forEach((produk) => {
      console.log(`ID : ${produk.id} | nama : ${produk.nama} | harga : ${produk.harga.toLocaleString()} | stok : ${produk.stok}`);
    });
  }
  console.log("----------------");
}

// menambahakn produk atau menghapus
tampilkanProduk();

tambahProduk("speaker", 1000000, 2);
tambahProduk("mousepad", 50000, 5);
tambahProduk("monitor", 1500000, 2);
tampilkanProduk();

hapusProduk(1);
tampilkanProduk();
