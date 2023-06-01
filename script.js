var random1 = Math.floor(Math.random() * 6) + 1;

var random2 = Math.floor(Math.random() * 6) + 1;

var srcImage1 = "images/" + random1 + ".webp";

var srcImage2 = "images/" + random2 + ".webp";

document.querySelectorAll("img")[0].setAttribute("src",srcImage1);

document.querySelectorAll("img")[1].setAttribute("src",srcImage2);

if(random1 > random2){
    document.querySelector("h3").innerText = "The winner is player 1.";
}

else if(random1 < random2){
    document.querySelector("h3").innerText = "The winner is player 2.";
}

else{
    document.querySelector("h3").innerText = "The game is Draw.";
}