let magicCard = document.getElementById("magic-card");
let children = Array.from(magicCard.children);

for(let i = 1; i < children.length; i++) {
    children[i].classList.add("magic-card_flipped_right");
}

let currentChildIndex = 0;

let nextElement = () => {
    if(!children[currentChildIndex + 1]) return;
    currentChildIndex++;
    children[currentChildIndex - 1].classList.add("magic-card_flipped_left");
    children[currentChildIndex].classList.remove("magic-card_flipped_right");
}

let prevElement = () => {
    if(!children[currentChildIndex - 1]) return;
    currentChildIndex--;
    children[currentChildIndex + 1].classList.add("magic-card_flipped_right");
    children[currentChildIndex].classList.remove("magic-card_flipped_left");
}
let buttonBoxes = Array.from(document.getElementsByClassName("magic-card_button_box"));

for(let buttonBox of buttonBoxes) {
    Array.from(buttonBox.children).forEach(child => {
        child.addEventListener('click', (Array.from(child.classList)[0] === "next") ? nextElement : prevElement);
    });
}