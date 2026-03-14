class Pelanggan {
  constructor(nama, nomorTelepon, kendaraanSewa) {
    this.nama = nama;
    this.nomorTelepon = nomorTelepon;
    this.kendaraanSewa = kendaraanSewa;
  }
}

class sistemTransportasi {
  constructor() {
    this.daftarPelanggan = [];
  }

  tambahPelanggan(pelanggan) {
    this.daftarPelanggan.push(pelanggan);
    this.tampilkanPelanggan();
  }

  tampilkanPelanggan() {
    const list = document.getElementById("daftarPelanggan");
    list.innerHTML = "";

    this.daftarPelanggan.forEach((p) => {
      const li = document.createElement("li");

      li.textContent = "Nama: " + p.nama + " | Telepon: " + p.nomorTelepon + " | Kendaraan: " + p.kendaraanSewa;

      list.appendChild(li);
    });
  }
}

const sistem = new sistemTransportasi();

const form = document.getElementById("formPelanggan");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const nama = document.getElementById("nama").value;
  const telepon = document.getElementById("telepon").value;
  const kendaraan = document.getElementById("kendaraan").value;

  const pelangganBaru = new Pelanggan(nama, telepon, kendaraan);

  sistem.tambahPelanggan(pelangganBaru);

  form.reset();
});
