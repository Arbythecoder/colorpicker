const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById("click");
const color = document.querySelector(".collar");

btn.addEventListener("click", function () {
  let newColor = "#";
  for (let i = 0; i < 6; i++) {
    newColor += hex[getRandomNumber()];
  }
  console.log(hexColor);

  color.textContent = newColor;
  document.body.style.backgroundColor = newColor;
});

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}
