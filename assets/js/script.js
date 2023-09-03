const rootElement = document.querySelector(":root");
const cover = document.querySelector(".hero");
const btnOpen = document.querySelector(".undangan");

function disableScroll() {
  scrollTop = document.pageYOffset || document.documentElement.scrollTop;
  scrollLeft = document.pageXOffset || document.documentElement.scrollLeft;

  window.onscroll = function () {
    window.scrollTo(scrollTop, scrollLeft);
  };

  rootElement.style.scrollBehavior = "auto";
}

function enableScroll() {
  window.onscroll = function () {};
  rootElement.style.scrollBehavior = "smooth";
  // localStorage.setItem("opened", "true");
}

// if (!localStorage.getItem("opened")) {
//   disableScroll();
// } else {
//   cover.classList.add("d-none");
// }

disableScroll();

btnOpen.addEventListener("click", () => {
  cover.setAttribute("data-aos", "fade-down");

  setTimeout(() => {
    cover.classList.add("hero-out");
  }, 1000);
});

const stickyTop = document.querySelector(".sticky-top");
const offcanvas = document.querySelector(".offcanvas");

offcanvas.addEventListener("show.bs.offcanvas", function () {
  stickyTop.style.overflow = "visible";
});

offcanvas.addEventListener("hidden.bs.offcanvas", function () {
  stickyTop.style.overflow = "hidden";
});

const urlParams = new URLSearchParams(window.location.search);
const nama = urlParams.get("n") || "";
const pronoun = urlParams.get("p") || "Bapak/Ibu/Saudara/i, ";
const namaRsvp = document.querySelector(".rsvp #nama");

const namaContainer = document.querySelector(".hero h4 span");
namaContainer.innerText = `${pronoun} ${nama}`;
namaRsvp.value = nama;
