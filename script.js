const MAX_PX = 190;

const container = document.querySelector("#container");

const but = document.querySelector("#submit-button");
const input = document.querySelector("#input");


but.addEventListener("click", () => {

    container.innerHTML = "";
    let squareNum = input.value;
    if(squareNum > 100) {
        alert("You could't have more than 100 squares");
        squareNum = 100;
    }
    let opasity = 1;
    container.style.cssText = `opacity: ${opasity--}`;
    const color = getRandomColor();
    for(let i = 0; i < squareNum; i++){
        const divOut = document.createElement('div');
        divOut.style.cssText = "display: flex;";
        container.appendChild(divOut);
        for(let j = 0; j < MAX_PX; j++){
            const divIn = document.createElement('div');
            divIn.style.cssText = "padding: 5px;"
            divOut.appendChild(divIn);
            divIn.addEventListener("mouseenter", () => {
                divIn.style.cssText = "padding: 5px; background-color: " + color;
            })
        }
    }
    container.style.cssText = "border: solid, 2px, black";
});

function getRandomColor(){
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    return `rgb(${r}, ${g}, ${b});`
}
