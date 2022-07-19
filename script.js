const cover = document.getElementById("cover");
const bukaUndangan = document.getElementById("bukaUndangan");

console.log(cover);
console.log(bukaUndangan);

bukaUndangan.addEventListener("click", () => {
  cover.classList.add("d-none");
});
