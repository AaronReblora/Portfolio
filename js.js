
const togglebtn = document.querySelector(".togglebtn");
const nav = document.querySelector(".navlinks");

togglebtn.addEventListener("click", () => {
    togglebtn.classList.toggle("click");
    nav.classList.toggle("open");
});


const typed = new Typed(".input", {
    strings: ["Web Developer", "Problem Solver", "C# Enthusiast"],
    typeSpeed: 70,
    backSpeed: 55,
    loop: true
});
