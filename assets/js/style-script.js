let magicCard = document.getElementById("magic-card");
let children = Array.from(magicCard.children);

for(let i = 1; i < children.length; i++) {
    children[i].classList.add("magic-card_flipped_right");
}

let currentChildIndex = 0;

let nextElement = () => {
    currentChildIndex++;
    children[currentChildIndex - 1].classList.add("magic-card_flipped_left");
    children[currentChildIndex].classList.remove("magic-card_flipped_right");
}

Array.from(document.getElementsByClassName("magic-card_button_box")).forEach(button => {
    button.addEventListener('click', nextElement);
})