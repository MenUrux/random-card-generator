import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

// this waits to get the DOM loaded before doing something.
document.addEventListener("DOMContentLoaded", () => {
  const cardDom = document.getElementById("card");
  const generateCardButton = document.getElementById("generate-card");
  const typeDom = document.querySelectorAll(".type");
  const widthInput = document.getElementById("width");
  const heightInput = document.getElementById("height");

  const cardArray = [
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
  const typeArray = ["♠️", "♣️", "♥️", "♦️"];

  //refactorized arrowfunctions. 
  // changed name for better legibility 
  const getRandomElement = array =>
    array[Math.floor(Math.random() * array.length)];

  const generateCard = () => {
    // better way to erase all the classes
    cardDom.className = "";

    const cardValue = getRandomElement(cardArray);
    const typeValue = getRandomElement(typeArray);

    cardDom.innerHTML = `
      <span class="type">${typeValue}</span>
      <div id="card-number">${cardValue}</div>
      <span class="type">${typeValue}</span>
    `;

    cardDom.classList.add(typeValue);

    typeDom.forEach(type => {
      type.innerText = typeValue;
    });
  };

  const changeSize = () => {
    const width = parseInt(widthInput.value, 10);
    const height = parseInt(heightInput.value, 10);

    // modified the width <= to be as the description, (before was <100).
    if (!isNaN(width) && width <= 100 && width >= 15) {
      cardDom.style.width = `${width}rem`;
    }

    if (!isNaN(height) && height <= 100 && height >= 10) {
      cardDom.style.height = `${height}rem`;
    }
  };

  generateCardButton.addEventListener("click", generateCard);
  widthInput.addEventListener("change", changeSize);
  heightInput.addEventListener("change", changeSize);

  generateCard();
  setInterval(generateCard, 10000);
});
