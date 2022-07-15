const btn = document.getElementById("btn");
const copyBtn = document.getElementById("copyBtn");
const color = document.querySelector(".color");

function random(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

randomBodyColor();

btn.addEventListener("click", function () {
  randomBodyColor();
});

copyBtn.addEventListener("click", () => {
  const colorCode = document.querySelector(".color").textContent;
  copyBtn.innerText = "Copied!";

  navigator.clipboard.writeText(colorCode);
  setTimeout(() => {
    copyBtn.innerText = "Copy";
  }, 3000);
});

function randomBodyColor() {
  document.body.style.backgroundColor = `rgba(${random(0, 255)}, ${random(
    0,
    255
  )}, ${random(0, 255)})`;
  color.textContent = `rgba(${random(0, 255)}, ${random(0, 255)}, ${random(
    0,
    255
  )})`;
}
