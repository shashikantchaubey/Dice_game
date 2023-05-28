var random = Math.floor(Math.random() * 6) + 1;

var random_image = random + ".png";
var image_file = "img/" + random_image;
console.log(image_file);

var select = document.querySelectorAll("img")[0];

select.setAttribute("src" , image_file);


// <-- FOr Second player -->

var random2 = Math.floor(Math.random()*6) + 1;

var image = random2 + ".png";

var image_file = "img/" + image;

var select = document.querySelectorAll("img")[1];
select.setAttribute("src", image_file);

// var random1 = Math.floor(Math.random() * 6) + 1;

// var random_image = random1 + ".png";
// var image_file = "img/" + random_image;
// console.log(image_file);

// var select = document.querySelectorAll("img")[1];

// select.setAttribute("src" , image_file);


if(random > random2){
    document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
}

else if( random < random2){
    document.querySelector("h1").innerHTML = "🚩 Player 2 Wins!";
}

else{
    document.querySelector("h1").innerHTML = "DRAW";
}
