var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randomizeButton = document.getElementById("randomizeButton");

function setGradient() {
  body.style.background =
    "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

  css.textContent = body.style.background + ";";
}

//Calls setGradient by default, so that color inputs match the background generated on the first page load.
setGradient();

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

//Generates a random color
function randomColorGenerator() {
  let n = (Math.random() * 0xfffff * 1000000).toString(16);
  let randomColor = "#" + n.slice(0, 6);
  return randomColor;
}

//Assigns randomly generated colors to color1.value and color2.value, updates background color and CSS text to match randomly generated colors.
function randomizeColors() {
  color1.value = randomColorGenerator();
  color2.value = randomColorGenerator();
  body.style.background = setGradient();
  css.textContent = body.style.background + ";";
}

//Calls randomizeColors function when button is clicked.
randomizeButton.addEventListener("click", randomizeColors);
