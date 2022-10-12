
var slider_img = document.querySelector("#one"); 

var images = ["one.png", "two.png", "three.png", "four.png", "five.png", "six.png", "seven.png", "eight.png", 
"nine.png", "ten.png", "eleven.png", "twelve.png", "thirteen.png", "fourteen.png", "fifteen.png", "sixteen.png",
"seventeen.png", "eighteen.png", "nineteen.png", "twenty.png", "twenty_one.png", "twenty_three.png", 
"twenty_four.png", "twenty_five.png", "twenty_six.png", "twenty_eight.png", "twenty_nine.png",
"thirty.png", "thirty_one.png", "thirty_two.png", "thirty_three.png", "thirty_four.png", "thirty_five.png"]; // I suppose Ill ad more later
var i = 0; // Current page Index

function prev(){
    if(i <= 0) i = images.length;
    i--; 
    return setImg();
}

function next(){
    if( i >= images.length-1 ) i = -1; 
    i++;
    return setImg();
}

function setImg(){
    return slider_img.setAttribute("src", "images/mini_book/" + images[i]);
}