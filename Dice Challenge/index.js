var rn1=Math.floor(Math.random() *6) + 1;
var randdice="dice"+rn1+".png";
var randomImageSource ="images/"+randdice;
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randomImageSource);
var rn2=Math.floor(Math.random()*6) +1;
var randomImageSource2 = "images/dice" + rn2+".png";
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImageSource2);
if(rn1>rn2){
document.querySelector("h2").innerHTML="Player1 Wins";
}
else if(rn1 < rn2){
    document.querySelector("h2").innerHTML = "Player2 Wins";
}
else{
    document.querySelector("h2").innerHTML="Draw Match";
}