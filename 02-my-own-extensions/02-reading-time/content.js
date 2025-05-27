// Searchs for the first h1 on the page
const h1 = document.querySelector("h1");

const h1Text = h1.innerText;
const h1Words = h1Text.trim().split(/\s+/);
const h1CountWord = h1Words.length;

let wordsPerMinut = 200;

const minutes = h1CountWord / wordsPerMinut;
const minutesRounded = Math.ceil(minutes * 100) / 100;

if (h1) console.log(`Estimated reading time for the title: ${minutesRounded} minutes!`);
else console.warn("No <h1> was found in this page!");
