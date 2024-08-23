const state = [];
const button = document.getElementById("button");
const modal = document.getElementById("modal");
const nameEmail = document.getElementById("name-email");

button.addEventListener("click", () => {
    modal.style.display = "block";
});

document.getElementById("form").addEventListener("submit", event => {
    event.preventDefault()

    const name = document.getElementById("name").value;
    const email = document.getElementById('email').value;

    state.push({ name, email });
    setUser(state);
});

const setUser = state => {
    // Golește conținutul anterior
    nameEmail.innerHTML = '';

    state.forEach(user => {
        let element = document.createElement('div');
        element.innerHTML = `<div>Name: ${user.name}</div><div>Email: ${user.email}</div>`;
        nameEmail.appendChild(element);
    });

    // Ascunde modalul
    modal.style.display = "none";

    // Creează butonul de resetare
    let but = document.createElement('div');
    but.innerHTML = "<button id='reset'>Reset</button>";
    nameEmail.appendChild(but);

    // Reatașează evenimentul pentru resetare
    document.getElementById("reset").addEventListener("click", () => window.location.reload());
};