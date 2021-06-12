let images = [
    "img/plastic1.png", 
    "img/plastic2.png", 
    "img/plastic3.png",
    "img/plastic4.png",
    "img/plastic5.png",
    "img/plastic6.png"
]
var keyNames = {
    32: "space",
    39: "left",
    38: "up",
    37: "right",
    40: "down"
};
let randomIndex = Math.floor(Math.random() * 6);
let randomIndex2 = Math.floor(Math.random() * 6);
let randomIndex3 = Math.floor(Math.random() * 6);
let trash1 = $("#trash1")
let trash2 = $("#trash2")
let trash3 = $("#trash3")
let fish = $("#fish")
for(let i = 0; i <= 5; i++){
    if(randomIndex == randomIndex2 || randomIndex == randomIndex3){
        randomIndex = Math.floor(Math.random() * 6);
    }
    if(randomIndex2 == randomIndex || randomIndex2 == randomIndex3){
        randomIndex2 = Math.floor(Math.random() * 6);
    }
    if(randomIndex3 == randomIndex || randomIndex3 == randomIndex2){
        randomIndex3 = Math.floor(Math.random() * 6);
    }
}
trash1.attr( "src", images[randomIndex])
trash2.attr( "src", images[randomIndex2])
trash3.attr( "src", images[randomIndex3])

$("body").keydown(function(event) {
    if(keyNames[event.keyCode] == "left");{
        fish.attr("class", "fishLeft")
        confirm("left")
    }
})