const toggle = document.getElementById("toggleDark");
const body = document.querySelector("body");

toggle.addEventListener("click", function(){
    this.classList.toggle("bi-sun");
    if(this.classList.toggle("bi-moon")){
        body.style.background = "#131313";
        body.style.color = "white";
        body.style.transition = "2s";
    }else{
        body.style.background = "white";
        body.style.color = "black";
        body.style.transition = "2s";
    }
})

function responsiveBar() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }