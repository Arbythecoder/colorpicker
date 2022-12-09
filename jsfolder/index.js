// selcting the DOM elements
const colors = [
  "green",
  "red",
  "blue",
  "yellow",
  "pink",
  "rgba(133,122,200)",
  "#f15025",
];
const myClick = document.getElementById("click");
const myColor = document.querySelector(".collar");

myClick.addEventListener("click", function () {
  const randomNumber = getRandomNumber();
  console.log(randomNumber);

  document.body.style.backgroundColor = colors[randomNumber];
  myColor.textContent = colors[randomNumber];
});
function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}
