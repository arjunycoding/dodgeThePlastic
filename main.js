let keyNames = {
    38: "up",
    40: "down",
    37: "left",
    39: "right"
}
let images = [
    "img/plastic1.png", 
    "img/plastic2.png", 
    "img/plastic3.png",
    "img/plastic4.png",
    "img/plastic5.png",
    "img/plastic6.png"
]
let randomIndex = Math.floor(Math.random() * 6);
let randomIndex2 = Math.floor(Math.random() * 6);
let randomIndex3 = Math.floor(Math.random() * 6);
let trash1 = $("#trash1")
let trash2 = $("#trash2")
let trash3 = $("#trash3")
trash1.attr( "src", images[randomIndex])
trash2.attr( "src", images[randomIndex2])
trash3.attr( "src", images[randomIndex3])