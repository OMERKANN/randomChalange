
var image2 = document.querySelectorAll("img")[1];

var image1 = document.querySelectorAll("img")[0];

var button = document.querySelector(".button");

button.addEventListener("click", rand)

function rand(){

    randomNumber = Math.floor(Math.random() * 6 +1 );
    randomNumber2 = Math.floor(Math.random() * 6 +1 );

    imageNumber = "dice" + randomNumber + ".png";
    randomİmage = "image/" + imageNumber;

    imageNumber = "dice" + randomNumber2 + ".png";
    randomİmage2 = "image/" + imageNumber;

    image2.setAttribute("src", randomİmage2);
    image1.setAttribute("src", randomİmage);
}



    


