const Btnlight = document.getElementById("btn1");
const darkBtn = document.getElementById("btn2");

Btnlight.addEventListener('click', () => {
    document.documentElement.style.setProperty('--background-color', '#ffffff');
})

darkBtn.addEventListener('click', () => {
    document.documentElement.style.setProperty('--background-color', '#000000');
})

