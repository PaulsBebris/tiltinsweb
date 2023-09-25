lvSelect = document.getElementById("lv-select");
ruSelect = document.getElementById("ru-select");
enSelect = document.getElementById("en-select");
lvWrapper = document.getElementById("lv-wrapper");
ruWrapper = document.getElementById("ru-wrapper");
enWrapper = document.getElementById("en-wrapper");
ruWrapper.hidden = true;
enWrapper.hidden = true;

// language selsect functionality
function selectlanguage(el) {
  if (this.dataset.lang == "lv") {
    lvWrapper.hidden = false;
    ruWrapper.hidden = true;
    enWrapper.hidden = true;
  } else if (this.dataset.lang == "ru") {
    ruWrapper.hidden = false;
    lvWrapper.hidden = true;
    enWrapper.hidden = true;
  } else if (this.dataset.lang == "en") {
    enWrapper.hidden = false;
    ruWrapper.hidden = true;
    lvWrapper.hidden = true;
  }
}

lvSelect.addEventListener("click", selectlanguage);
ruSelect.addEventListener("click", selectlanguage);
enSelect.addEventListener("click", selectlanguage);
