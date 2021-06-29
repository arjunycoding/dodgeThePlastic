let images = [
    "img/plastic1.png", 
    "img/plastic2.png", 
    "img/plastic3.png",
    "img/plastic4.png",
    "img/plastic5.png",
    "img/plastic6.png"
]

let trash1 = $("#trash1")
let trash2 = $("#trash2")
let trash3 = $("#trash3")
let fish = $("#fish")
function generatePlastic(){
    let randomIndex = Math.floor(Math.random() * 6);
    let randomIndex2 = Math.floor(Math.random() * 6);
    let randomIndex3 = Math.floor(Math.random() * 6);
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
}
let y = 150 ;
let yPos = y + "px";
function eventHandler(event){
    if(event.keyCode == 38){
        y -= 10;
        yPos = y + "px";
        fish.css("top", yPos)
        console.log(yPos)
        if(yPos == 70 + "px"){
            y += 10
        }
    } else if(event.keyCode == 40){
        y += 10;
        yPos = y + "px";
        fish.css("top", yPos)
        console.log(yPos)
        if(yPos == 330 + "px"){
            y -= 10
        }
    }
}
function identifyHit(){
    if($("#trash1").css("left")){
        
    }
}
$("body").keydown(eventHandler)
setInterval(generatePlastic, 2500)

// keyNames
//     38: "up",
//     40: "down"