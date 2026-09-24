// Typing Animation

const text = "Photo Editor & Web Developer";
const typingElement = document.querySelector(".typing");

let index = 0;

function typeEffect() {

    if(index < text.length){
        typingElement.textContent += text.charAt(index);
        index++;
        setTimeout(typeEffect, 100);
    }

}

window.onload = () => {
    typeEffect();
};


// Scroll Animation

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.style.opacity="1";
            entry.target.style.transform="translateY(0)";

        }

    });

});

document.querySelectorAll(".card").forEach(card=>{

    card.style.opacity="0";
    card.style.transform="translateY(50px)";
    card.style.transition="all .8s ease";

    observer.observe(card);

});