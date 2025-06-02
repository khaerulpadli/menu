// data/menu.js
function tampilkanMenu(data) {
    menuList.innerHTML = "";
  
    data.forEach((item, index) => {
      const card = document.createElement('div');
      card.className = "col-6 col-md-6 col-lg-4 menu-item";
      card.style.animationDelay = `${index * 0.1}s`;
  
      card.innerHTML = `
        <div class="card card-custom">
          <img src="${item.gambar}" class="card-img-top" alt="${item.nama}">
          <div class="card-body">
            <h5 class="card-title">${item.nama}</h5>
            <p class="card-text">${item.deskripsi}</p>
            <p class="card-text text-primary fw-bold">${item.harga}</p>
          </div>
        </div>
      `;
  
      menuList.appendChild(card);
    });
  }
  
const menuData = [
    {
      nama: "Nasi Goreng Spesial",
      deskripsi: "Nasi goreng lezat dengan ayam dan telur.",
      harga: "Rp50.000",
      kategori: "makanan",
      gambar: "img/nasi-goreng.jpg",
    },
    {
      nama: "Mie goreng Spesial ",
      deskripsi: "Mie goreng lezat dengan sayur dan telur.",
      harga: "Rp40.000",
      kategori: "makanan",
      gambar: "img/mie-goreng.jpg",
    },
    {
      nama: "Mie Rebus ",
      deskripsi: "Mie goreng lezat dengan sayur dan telur.",
      harga: "Rp40.000",
      kategori: "makanan",
      gambar: "img/mie-rebus.jpg",
    },
    {
      nama: "Jos Susu",
      deskripsi: "Minuman segar dengan rasa manis alami.",
      harga: "Rp20.000",
      kategori: "minuman",
      gambar: "img/jos-susu.jpg",
    },

    {
      nama: "Kopi Aren",
      deskripsi: "cocok untuk pecinta kopi sejati.",
      harga: "Rp10.000",
      kategori: "kopi",
      gambar: "img/aren.jpg",
    },
    {
      nama: "Kopi ABC Susu",
      deskripsi: "cocok untuk pecinta kopi sejati.",
      harga: "Rp15.000",
      kategori: "kopi",
      gambar: "img/abc.jpg",
    },
    {
      nama: "Kopi White",
      deskripsi: "cocok untuk pecinta kopi sejati.",
      harga: "Rp15.000",
      kategori: "kopi",
      gambar: "img/w.jpg",
    },
    {
      nama: "Kopi Kapal Api",
      deskripsi: "cocok untuk pecinta kopi sejati.",
      harga: "Rp20.000",
      kategori: "kopi",
      gambar: "img/kapal.jpg",
    },
    {
      nama: "Kopi Yaaaaa",
      deskripsi: "cocok untuk pecinta kopi sejati.",
      harga: "Rp5.000",
      kategori: "kopi",
      gambar: "img/ya.jpg",
    },
    {
      nama: "Energen",
      deskripsi: "cocok untuk pecinta kopi sejati.",
      harga: "Rp20.000",
      kategori: "kopi",
      gambar: "img/energen.jpg",
    },
  ];
  
