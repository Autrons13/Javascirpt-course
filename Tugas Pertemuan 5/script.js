// Data Produk
let products = [
  { id: 1, nama: "keyboard", harga: "250000" },
  { id: 2, nama: "mouse", harga: "300000" },
  { id: 3, nama: "monitor", harga: "750000" },
  { id: 4, nama: "PC", harga: "5000000" },
  { id: 5, nama: "mousepad", harga: "25000" },
];

// elemen DOM
const listproduk = document.getElementById("list-produk");
const form = document.getElementById("product-form");
const nameInput = document.getElementById("nama");
const priceInput = document.getElementById("harga");

//tampilkan produk
const displayProducts = () => {
  listproduk.innerHTML = "";

  products.forEach(({ id, nama, harga }) => {
    const li = document.createElement("li");

    li.innerHTML = `${nama} - Rp${harga}
            <button onclick = "deleteProduct(${id})">Hapus</button>`;

    listproduk.appendChild(li);
  });
};

// tambah produk
const addProduct = (newProduct) => {
  products = [...products, newProduct];
  displayProducts();
};

// hapus produk
const deleteProduct = (id) => {
  products = products.filter((products) => products.id !== id);
  displayProducts();
};

// event listener
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const newProduct = {
    id: Date.now(),
    nama: nameInput.value,
    harga: Number(priceInput.value),
  };

  addProduct(newProduct);

  form.reset();
});

//rest parameter
const logProducts = (...items) => {
  console.log("Daftar Produk:", items);
};

logProducts(...products);

//tampilan awal
displayProducts();
