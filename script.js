const cards = [
  ["The Star", "Hope returns through patience."],
  ["The Moon", "Name the fear and it loses some of its fog."],
  ["The Sun", "Truth makes room for joy."],
  ["Temperance", "Balance is the doorway."],
  ["Strength", "Soft control is still control."],
  ["The Hermit", "The answer gets louder in quiet places."],
  ["The Lovers", "Choose what matches your whole heart."],
  ["Justice", "Clarity asks for honest measurement."],
  ["Ace of Cups", "A sincere beginning is available."],
  ["Six of Swords", "Peace arrives through movement."]
];

const positions = ["Past", "Present", "Future"];
const drawButton = document.querySelector("#drawButton");
const cardsEl = document.querySelector("#cards");
const numberForm = document.querySelector("#numberForm");
const numberResult = document.querySelector("#numberResult");

function drawCards() {
  const shuffled = [...cards].sort(() => Math.random() - 0.5).slice(0, 3);
  cardsEl.innerHTML = shuffled.map(([name, message], index) => `
    <article class="tarot-card">
      <span>${positions[index]}</span>
      <strong>${name}</strong>
      <p>${message}</p>
    </article>
  `).join("");
}

function reduceNumber(value) {
  let total = value;
  while (total > 9 && total !== 11 && total !== 22 && total !== 33) {
    total = String(total).split("").reduce((sum, digit) => sum + Number(digit), 0);
  }
  return total;
}

drawButton.addEventListener("click", drawCards);

numberForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = document.querySelector("#firstName").value.trim() || "friend";
  const date = document.querySelector("#birthDate").value.replaceAll("-", "");
  const total = date.split("").reduce((sum, digit) => sum + Number(digit), 0);
  const lifePath = reduceNumber(total);
  numberResult.textContent = `${name}, your Life Path Number is ${lifePath}.`;
});
