// Searchs for the first title on the page
const title = document.querySelector("h1");
if (!title) title = document.querySelector("h2");

const text = document.body.innerText;
const words = text.trim().split(/\s+/).length;

let wordsPerMinut = 200;

const minutes = words / wordsPerMinut;
const minutesRounded = Math.ceil(minutes * 100) / 100;

if (title) console.log(`Title found: ${title.innerText}!`);
else console.warn("No title was found in this page!");

console.log(`Words found: ${words}`);

if (minutesRounded < 1) {
  console.log(`Fast reading: ${minutesRounded} minutes.`);
} else if (minutesRounded < 5) {
  console.log(`Medium reading: ${minutesRounded} minutes.`);
} else {
  console.log(`Long reading: ${minutesRounded} minutes.`);
}

const newDiv = document.createElement("div");
newDiv.innerHTML = `<p>Reading time: ${minutesRounded} min.</p>`;
document.body.appendChild(newDiv);
