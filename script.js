const container = document.querySelector("#fakt");
const button = document.querySelector("#button");

const API_URL = 'https://uselessfacts.jsph.pl/api/v2/facts/random?language=de';

async function fetchData(url) {
    try {
        const response = await fetch(url);
        return await response.json();
    } catch (e) {
        console.error(e);
        return [];
    }
}


async function showData() {
    let myData = await fetchData(API_URL);
    container.innerHTML = `
        <p>${myData.text}</p>
        `;
}

showData();

button.addEventListener("click", function (event) {
    showData();
});
