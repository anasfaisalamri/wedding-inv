const cover = document.getElementById("cover");
const bukaUndangan = document.getElementById("bukaUndangan");
const content = document.getElementById("content");
const navbar = document.querySelector(".navigationBar");

window.onload = () => {
  document.body.style.overflowY = "hidden";
  document.body.style.overflowX = "hidden";
  content.classList.add("d-none");
};

bukaUndangan.addEventListener("click", () => {
  document.body.style.overflowY = "scroll";

  cover.setAttribute("data-aos", "fade-down");

  setTimeout(() => {
    cover.classList.add("coverOut");
  }, 1000);

  content.classList.remove("d-none");

  document.getElementById("song").play();
});

const prokes = [
  {
    icon: "social-distancing",
    title: "Menjaga Jarak",
    text: "Mohon untuk menjaga jarak antara tamu undangan minimal 1 meter.",
    aos: "fade-right",
  },
  {
    icon: "masker",
    title: "Memakai Masker",
    text: "Seluruh peserta acara diwajibkan untuk mengenakan masker sewaktu mengikuti acara.",
    aos: "fade-left",
  },
  {
    icon: "hand-sanitizer",
    title: "Menggunakan Hand Sanitizer",
    text: "Bawa dan gunakanlah hand sanitizer untuk menjaga tangan anda tetap steril.",
    aos: "fade-right",
  },
  {
    icon: "no-handshake",
    title: "Hindari Berjabat Tangan",
    text: "Hindari berjabat tangan dan gunakan salam tanpa kontak.",
    aos: "fade-left",
  },
];

const bagianProkes = document.querySelector(".prokes");
const isiProkes = `${prokes
  .map(
    (e) =>
      `<div class="mt-4" data-aos="${e.aos}" data-aos-offset="200">
    <img src="assets/img/icons/${e.icon}.png" alt="${e.icon}">
    <p>
      <span class="fw-semibold fs-5">${e.title}</span><br>
      ${e.text}
    </p>
  </div>`
  )
  .join("")}`;

bagianProkes.innerHTML = isiProkes;

const inputNamaRsvp = document.querySelector("input[name='nama-pengunjung']");
const inputJmlRsvp = document.querySelector("input[name='rsvp']");
const btnKonfiRsvp = document.querySelector("button[name='konfirmasi']");
const btnTdkHadir = document.querySelector("button[name='tidak-hadir']");
const btnClose = document.querySelector("button[aria-label='Close'");
const alertRsvp = document.querySelector(".kirim");

btnKonfiRsvp.addEventListener("click", (e) => {
  e.preventDefault();
  if (inputNamaRsvp.value !== "" && inputJmlRsvp.value !== "") {
    alertRsvp.innerHTML = "kami tunggu kehadiran anda! terima kasih.";
    alertRsvp.classList.remove("d-none", "alert-danger");
    alertRsvp.classList.add("d-block", "alert", "alert-success", "mb-2");
    inputNamaRsvp.value = "";
    inputJmlRsvp.value = "";
  }
  return 0;
});

btnTdkHadir.addEventListener("click", (e) => {
  e.preventDefault();
  if (inputNamaRsvp.value !== "" || inputJmlRsvp.value !== "") {
    alertRsvp.innerHTML = "mohon doakan yang terbaik untuk kami.";
    alertRsvp.classList.remove("d-none", "alert-success");
    alertRsvp.classList.add("d-block", "alert", "alert-danger", "mb-2");
    inputNamaRsvp.value = "";
    inputJmlRsvp.value = "";
  }
  return 0;
});

btnClose.addEventListener("click", () => {
  alertRsvp.classList.add("d-none");
  alertRsvp.classList.remove(
    "d-block",
    "alert",
    "alert-success",
    "alert-danger",
    "mb-2"
  );
  inputNamaRsvp.value = "";
  inputJmlRsvp.value = "";
});

let imgGaleri = [
  "gallery-1",
  "gallery-2",
  "gallery-3",
  "gallery-4",
  "gallery-5",
  "gallery-6",
];

let galeri = document.querySelector(".galeri");
let galeriImg = [];

imgGaleri.forEach((value, index) => {
  galeriImg.push(`assets/img/galeri/${value}.jpg`);
});

galeriImg.forEach((value, index) => {
  let owlItem = document.createElement("div");
  owlItem.setAttribute("class", "item");

  let imgItem = document.createElement("img");
  imgItem.setAttribute("src", value);

  owlItem.appendChild(imgItem);
  galeri.appendChild(owlItem);
});

$("#galeri").add(function () {
  $(".owl-carousel").owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 3000,
    margin: 10,
    nav: false,
    dotClass: false,
    dots: false,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      800: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  });
});

const btnUcapan = document.querySelector("button[name='kirim']");
const inputNamaUcapan = document.querySelector("input[name='nama']");
const inputTextUcapan = document.querySelector("textarea[name='tulis-ucapan']");
btnUcapan.addEventListener("click", (e) => {
  e.preventDefault();
  inputNamaUcapan.value = "";
  inputTextUcapan.value = "";
});
