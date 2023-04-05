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
