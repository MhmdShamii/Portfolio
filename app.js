let count = 1;

const prev = document.querySelector(".fa-arrow-left");
const next = document.querySelector(".fa-arrow-right");
const img = document.querySelector(".image");

prev.addEventListener("click", () => {
  count--;
  if (count == 0) {
    count = 3;
  }
  img.src = `./rec/image${count}.png`;
});
next.addEventListener("click", () => {
  count++;
  if (count == 4) {
    count = 1;
  }
  img.src = `./rec/image${count}.png`;
});
