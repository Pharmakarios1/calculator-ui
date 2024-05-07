const displayEl = document.querySelector(".displayEl");

const oneEl = document.querySelector(".one");
const twoEl = document.querySelector(".two");
const threeEl = document.querySelector(".three");
const fourEl = document.querySelector(".four");
const fiveEl = document.querySelector(".five");
const sixEl = document.querySelector(".six");
const sevenEl = document.querySelector(".seven");
const eightEl = document.querySelector(".eight");
const nineEl = document.querySelector(".nine");
const zeroEl = document.querySelector(".zero");

const plusEl = document.querySelector(".plus");
const minusEl = document.querySelector(".minus");
const multiplyEl = document.querySelector(".multiply");
const divideEl = document.querySelector(".divide");
const equalEl = document.querySelector(".equal");
const clearEl = document.querySelector(".clear");
const periodEl = document.querySelector(".period");

oneEl.addEventListener("click", () => {
  displayEl.value += 1;
});
twoEl.addEventListener("click", () => {
  displayEl.value += 2;
});

threeEl.addEventListener("click", () => {
  displayEl.value += 3;
});

fourEl.addEventListener("click", () => {
  displayEl.value += 4;
});

fiveEl.addEventListener("click", () => {
  displayEl.value += 5;
});

sixEl.addEventListener("click", () => {
  displayEl.value += 6;
});
sevenEl.addEventListener("click", () => {
  displayEl.value += 7;
});

eightEl.addEventListener("click", () => {
  displayEl.value += 8;
});

nineEl.addEventListener("click", () => {
  displayEl.value += 9;
});

zeroEl.addEventListener("click", () => {
  displayEl.value += 0;
});

plusEl.addEventListener("click", () => {
  displayEl.value += "+";
});

minusEl.addEventListener("click", () => {
  displayEl.value += "-";
});

multiplyEl.addEventListener("click", () => {
  displayEl.value += "*";
});

divideEl.addEventListener("click", () => {
  displayEl.value += "/";
});
periodEl.addEventListener("click", () => {
  displayEl.value += ".";
});

clearEl.addEventListener("click", () => {
  displayEl.value = " ";
});

equalEl.addEventListener("click", () => {
  try {
    displayEl.value = eval(displayEl.value);
  } catch (error) {
    displayEl.value = "Error!";
  }
});
