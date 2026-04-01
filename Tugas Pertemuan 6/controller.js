import data from "./data.js";

export const lihatData = () => {
  const hasil = data.map((item, index) => {
    return `${index + 1}. ${item.nama} - ${item.umur} - ${item.alamat} `;
  });

  console.log("===Data User===");
  hasil.forEach((item) => console.log(item));
};

export const tambahData = () => {
  data.push({ nama: "sugiono", umur: "45", alamat: "jln terang" }, { nama: "sutrisno", umur: "55", alamat: "jln terang III" }, { nama: "adi liam", umur: "45", alamat: "jln kampung bakmi" });

  console.log("Data berhasil ditambahkan");
};

export const hapusData = (index) => {
  if (index >= 0 && index < data.length) {
    data.splice(index, 1);
    console.log("Data dihapus");
  } else {
    console.log("index invalid");
  }
};
