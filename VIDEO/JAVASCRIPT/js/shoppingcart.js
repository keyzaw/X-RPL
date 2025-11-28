let tblmenu = [
    {
        idmenu: 1,
        idkategori: 1,
        menu: "Apel Manalagi",
        gambar: "apelmanalagi.jpg",
        harga: 3000
    },
    {
        idmenu: 2,
        idkategori: 1,
        menu: "Pisang Raja",
        gambar: "pisangraja.jpeg",
        harga: 5000
    },
    {
        idmenu: 3,
        idkategori: 1,
        menu: "Nasi Padang",
        gambar: "naspad.jpeg",
        harga: 20000
    },
    {
        idmenu: 4,
        idkategori: 1,
        menu: "Nasi Ayam",
        gambar: "nasyam.jpeg",
        harga: 15000
    },
    {
        idmenu: 5,
        idkategori: 1,
        menu: "Es Teh",
        gambar: "esteh.jpeg",
        harga: 7000
    },
    {
        idmenu: 6,
        idkategori: 1,
        menu: "Es Jeruk",
        gambar: "esjeyuk.jpeg",
        harga: 7000
    },
];


let tampil = tblmenu.map(function (kolom) {
    return `<div class="produk-content">
            <div class="image">
                <img src="img/${kolom.gambar}" alt="" />
            </div>
            <div class="titel">
                <h2>${kolom.menu}</h2>
            </div>

            <div class="harga">
                <h2>${kolom.harga}</h2>
            </div>

            <div class="btn-beli">
                <button data-idmenu=${kolom.idmenu}>Beli</button>
            </div>

        </div>`;
});

let isi = document.querySelector(".produk");

isi.innerHTML = tampil;

// console.log(tampil);

let btnbeli =document.querySelectorAll(".btn-beli > button");

let cart = [];

for (let index = 0; index < btnbeli.length; index++) {
    btnbeli[index].onclick = function () {
        // console.log(btnbelu[index].dataset.["idmenu"]);
        // cart.push(btnbeli[index].dataset["idmenu"]);

        tblmenu.filter(function (a) {
            if (a.idmenu==btnbeli[index].dataset["idmenu"]) {
                cart.push(a);
                console.log(cart);
            }
        })
    };
}

// console.log(cart);