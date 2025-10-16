const btns = document.getElementById("btns");
const cpuText = document.getElementById("cpuText");
const msg = document.getElementById("msg");
const pScore = document.getElementById("pScore");
const cScore = document.getElementById("cScore");

const picks = ["Rock", "Paper", "Scissors"];

let p = 0;
let c = 0;

btns.addEventListener("click", (e) => {
    const you = e.target.textContent;
    const cpu = picks[Math.floor(Math.random() * 3)];

    cpuText.textContent = `CPU: ${cpu}`;

    if (cpu === you) {
        msg.textContent = "Draw!";
    } else if (
        (cpu === "Rock" && you === "Scissors") ||
        (cpu === "Paper" && you === "Rock") ||
        (cpu === "Scissors" && you === "Paper")
    ) {
        c++;
        msg.textContent = "CPU wins!";
        cScore.textContent = `CPU: ${c}`;
    } else {
        p++;
        msg.textContent = "You win!";
        pScore.textContent = `You: ${p}`;
    }
});


// 2) წამოიღეთ და გამოიტანეთ ინფორმაცია  github-ის api-დან როდესაც მოხდება ფორმაში გითჰაბის 
// მომხარებლის სახელის შეტანა და დადასტურება

const myForm = document.querySelector('form');
const myInput = document.getElementById("myInput");
const box = document.getElementById("box");

myForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = myInput.value;
    const getData = fetch(`https://api.github.com/users/${name}`);

    getData
        .then(res => res.json())
        .then(showData)
        .catch(err => console.log("Error: "+err));});

function showData(info) {
    box.innerHTML = `
        <div>
            <h2>${info.name}</h2>
            <p>Repos: ${info.public_repos}</p>
            <img src="${info.avatar_url}" width="100" alt="Avatar"/>
            <p><a href="${info.html_url}">GitHub Profile</a></p>
        </div>
    `;}