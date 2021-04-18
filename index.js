for (var i = 0; i < document.querySelectorAll(".drum").length ; i++){
  document.querySelectorAll(".drum")[i].addEventListener("click", function (){
    (new Audio("sounds/" + (this.innerHTML) + ".mp3")).play();
    pressedAnimation (this.innerHTML);
  });
}

document.addEventListener("keydown", function (event){
  (new Audio("sounds/" + (event.key) + ".mp3")).play();
  pressedAnimation (event.key);

});

function pressedAnimation(currentKey){
  document.querySelector("." + currentKey).classList.add("pressed");
  setTimeout(function () {
    document.querySelector("." + currentKey).classList.remove("pressed");
  }, 100);
}
