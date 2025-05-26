const container = document.querySelector("#fakt");
const button = document.querySelector("#button");
const API_URL = 'https://uselessfacts.jsph.pl/api/v2/facts/random?language=de';

async function showData() {
    try {
        const response = await fetch(API_URL);
        const data = await response.json();
        container.innerHTML = `<p>${data.text}</p>`;
    } catch (e) {
        console.error(e);
    }
}

showData();
button.addEventListener("click", showData);
