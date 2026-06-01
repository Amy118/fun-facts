const facts = [
  "Honey never spoils. Archaeologists found 3000-year-old honey in Egyptian tombs!",
  "Octopuses have three hearts and blue blood.",
  "A day on Venus is longer than a year on Venus.",
  "Bananas are slightly radioactive.",
  "The Eiffel Tower grows 6 inches taller in summer due to heat.",
  "Cleopatra lived closer in time to the Moon landing than to the pyramids being built.",
  "A group of flamingos is called a flamboyance.",
  "Wombats produce cube-shaped poop — the only animal to do so!",
  "The shortest war in history lasted only 38-45 minutes.",
  "Butterflies taste with their feet.",
  "A snail can sleep for 3 years straight.",
  "The moon is moving away from Earth at 3.8 cm per year.",
  "Sharks are older than trees.",
  "You can't hum while holding your nose closed.",
  "A bolt of lightning is 5 times hotter than the sun's surface.",
];

let current = 0;

function newFact() {
  current = Math.floor(Math.random() * facts.length);
  document.getElementById("factText").textContent = facts[current];
  document.getElementById("counter").textContent = `Fact ${current + 1} of ${facts.length}`;
}

function copyFact() {
  navigator.clipboard.writeText(facts[current]);
  alert("Fact copied!");
}