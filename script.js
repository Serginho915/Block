const block = document.querySelector(`#block`);

block.style.left = 0;
block.style.top = 0;

const STEP = 10;

const movingRight = () => {
    block.style.left = parseInt(block.style.left) + STEP + `px`;
    block.removeEventListener(`keyup`,movingRight);
    if((block.offsetLeft + block.offsetWidth)  > document.body.offsetWidth){
    
        block.style.left = parseInt(block.style.left) - STEP * 2 + `px`;
        block.innerHTML += `<p id =>BAM</p>`
         setTimeout(() => { 
            block.innerHTML = ``
        }, 1000)
    }
}

const movingBottom = () => {
    block.style.top = parseInt(block.style.top) + STEP + `px`;
    block.removeEventListener(`keyup`,movingBottom)

}

const movingLeft = () => {
    block.style.left = parseInt(block.style.left) - STEP + `px`;
   

    if((block.offsetLeft + block.offsetWidth)  < block.offsetWidth){
        block.style.left = parseInt(block.style.left) + STEP * 2 + `px`;
        block.innerHTML += `<p id =>BAM</p>`
         setTimeout(() => { 
            block.innerHTML = ``
        }, 1000)
    }
    block.removeEventListener(`keyup`,movingLeft)
}

const movingTop = () => {
    block.style.top = parseInt(block.style.top) - STEP + `px`;
    block.removeEventListener(`keyup`,movingTop)
}

const jump = () => {
    
    setTimeout(() => {
        block.style.top = parseInt(block.style.top) + 100 + `px`;
        block.removeEventListener(` `,jump)
    }, 500)
    block.style.top = parseInt(block.style.top) - 100 + `px`;
    
}

const sit = () => {
    
    setTimeout(() => {

        block.style.width = 100 + `px`;
        block.style.height = 100 + `px`;
        block.style.top = parseInt(block.style.top)  - 50 + `px`;
        block.removeEventListener(`Control`,sit)
    }, 500)
        block.style.top = parseInt(block.style.top)  + 50 + `px`;
        block.style.width = 200 + `px`;
        block.style.height = 50 + `px`;
}    
// document.addEventListener(`keydown`,e =>{
//     console.log(e);
// })

const ACTIONS = {
    17: sit,
    32: jump,
    37: movingLeft,
    39: movingRight,

}
document.addEventListener(`keydown`, e =>  ACTIONS[e.keyCode]());
// debugger;
let blockRightCoordinate = block.offsetLeft + block.offsetWidth;
let blockTopCoordinate = block.offsetTop+block.offsetHeight;
let bodyWidth = document.body.offsetWidth;
let bodyHeight = document.body.offsetHeight;






