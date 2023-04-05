lvSelect = document.getElementById("lv-select");
ruSelect = document.getElementById("ru-select");
lvWrapper = document.getElementById("lv-wrapper");
ruWrapper = document.getElementById("ru-wrapper");
ruWrapper.hidden = true;

// language selsect functionality
function selectlanguage(el) {
  if (this.dataset.lang == "lv") {
    lvWrapper.hidden = false;
    ruWrapper.hidden = true;
  } else if (this.dataset.lang == "ru") {
    ruWrapper.hidden = false;
    lvWrapper.hidden = true;
  }
}

lvSelect.addEventListener("click", selectlanguage);
ruSelect.addEventListener("click", selectlanguage);

// // animations
// // footballer animation
function mooveFootballers(el,i) {
  let posX = 0;
  let posY = 0;
  let bounce = false;
  let opacity = 0;
  // let id = null;
  // debugger;
  
    // clearInterval(id);
  let id = setInterval(frame, 20*(i+1));
  function frame() {
    if (posX <= 150 && bounce) {
      // debugger;
      if (posY > 500) posY = 0;
      //   clearInterval(id);
      if(bounce == true && posX == 0) {
        bounce = false;
      }
      posX--;
      posY += Math.floor(Math.random()*5);
      el.style.top = posY + "px";
      el.style.left = posX + "px";
    } else {

      posX == 149 ? bounce = true : bounce = false;
      posX++;
      posY += Math.floor(Math.random()*5);
      opacity = opacity+0.005;
      if(opacity > 1) {opacity = opacity-0.05};
      el.style.opacity = opacity;
      el.style.top = posY + "p  x";
      el.style.left = posX + "px";
    }
  }
}

// elements = document.getElementsByClassName('left-animate-obj');
// for(let i = 0; i < elements.length; i++) {
//   mooveFootballers(elements.item(i),i);
// }
