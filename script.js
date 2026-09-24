const text = "Photo Editor & Web Developer";
const typing = document.querySelector(".typing");

let i = 0;

function typeEffect() {

    if (i < text.length) {
        typing.innerHTML += text.charAt(i);
        i++;
        setTimeout(typeEffect, 100);
    }
}

window.onload = typeEffect;