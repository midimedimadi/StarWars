const hoverImage = document.querySelector(".glowUp");

function glowup() {
    hoverImage.style.display = "block";
}
  
function notglowup() {
    hoverImage.style.display = "none";
}

function glowdown() {
    document.querySelector(".glowDown").style.display = "block";
}
  
function notglowdown() {
    document.querySelector(".glowDown").style.display = "none";
}

function Tatooine() {
    document.querySelector(".text").style.display = "block";
}
  
function notTatooine() {
    document.querySelector(".text").style.display = "none";
}

function Alderaan() {
    document.querySelector("#text1").style.display = "block";
}
  
function notAlderaan() {
    document.querySelector("#text1").style.display = "none";
}

function planetchange(){
    document.getElementById("planet1").style.display = "none";
    document.getElementById("planet2").style.display = "block"
}

function planetchange1(){
    document.getElementById("planet1").style.display = "block";
    document.getElementById("planet2").style.display = "none"
}