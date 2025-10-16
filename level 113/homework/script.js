document.getElementById("lightModeBtn").addEventListener("click", function () {
    document.body.classList.remove("dark-theme");
    document.body.classList.add("light-theme");
});

document.getElementById("darkModeBtn").addEventListener("click", function () {
    document.body.classList.remove("light-theme");
    document.body.classList.add("dark-theme");
});