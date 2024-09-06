let hamburger = document.querySelector(".hamburger");
let ul = document.querySelector(".ul");

let isClicked = false;

hamburger.addEventListener("click", () => {
    if(!isClicked) {
        hamburger.classList.remove("fa-bars");
        hamburger.classList.add("fa-xmark")
        ul.classList.remove("ul");
        ul.classList.add("secondUl");
        isClicked = true;
    } else {
        hamburger.classList.add("fa-bars");
        hamburger.classList.remove("fa-xmark")
        ul.classList.add("ul");
        ul.classList.remove("secondUl");
        isClicked = false;
    }
})