let keyNames = {
    38: "up",
    40: "down",
    37: "left",
    39: "right"
}
let fish = document.querySelector("#fish");
let fishStyles = fish.style;
function moveUp(){
    fishStyles.top += 2 + "px";

}
function moveDown(){
    fishStyles.top -= 2 + "px";

}
function moveLeft(){
    fishStyles.left += 2 + "px";

}
function moveRight(){
    fishStyles.letf -= 2 + "px";

}
function moveFish(event){
    let key = keyNames[event.keyCode];

    if(key == "up"){
        moveUp();
    } else if(key == "down"){
        moveDown()
    } else if(key == "right"){
        moveRight()
    } else if (key == "left"){
        moveLeft()
    }
}

$("body").keydown(moveFish);