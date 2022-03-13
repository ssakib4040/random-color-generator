function random(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  document.body.style.backgroundColor = `rgba(${random(0, 255)}, ${random(
    0,
    255
  )}, ${random(0, 255)})`;
  color.textContent = `rgba(${random(0, 255)}, ${random(0, 255)}, ${random(
    0,
    255
  )})`;
});
