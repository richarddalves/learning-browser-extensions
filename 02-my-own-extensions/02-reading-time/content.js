// Procura o primeiro h1 que aparece na página
const h1 = document.querySelector("h1");

if (h1) console.log(`Title found: ${h1.innerText}!`);
else console.warn("No <h1> was found in this page!");
