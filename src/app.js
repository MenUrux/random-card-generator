/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const cardDom = document.getElementById("card");
const generateCardButton = document.getElementById("generate-card");
const typeDom = document.querySelectorAll(".type");
const widthInput = document.getElementById("width");
const heightInput = document.getElementById("height");

/* console.log(typeDom); */

let cardArray = [
  "A",
  "K",
  "J",
  "Q",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10"
];

/* let typeArray = ["spade", "club", "heart", "diamond"];
 */
let typeArray = ["♠️", "♣️", "♥️", "♦️"];

function randomNumber(array) {
  let random = Math.floor(Math.random() * array.length);
  return random;
}

function generateCard() {
  cardDom.classList.value = "";

  let cardValue = cardArray[randomNumber(cardArray)];
  let typeValue = typeArray[randomNumber(typeArray)];

  cardDom.innerHTML = `
    <span class="type">${typeValue}</span>
    <div id="card-number">${cardValue} </div>
    <span class="type">${typeValue}</span>
    `;

  cardDom.classList.add(typeValue);

  typeDom.forEach(type => {
    type.innerText = typeValue;
  });
}

window.onload = function() {
  generateCard();
};

function changeSize(newValueSize) {
  console.log(newValueSize);

  const width = parseInt(widthInput.value, 10);
  const height = parseInt(heightInput.value, 10);

  if (!isNaN(width) && width < 100 && width >= 15) {
    card.style.width = width + "rem";
  }

  if (!isNaN(height) && height < 100 && height >= 10) {
    card.style.height = height + "rem";
  }
}

generateCardButton.onclick = generateCard;

widthInput.addEventListener("change", changeSize);
heightInput.addEventListener("change", changeSize);

setInterval(() => {
  generateCard();
}, 10000);
