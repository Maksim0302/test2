document.addEventListener('click', documentClick);
function documentClick(e) {
  const targetItem = e.target;
  if (targetItem.closest('.icon-menu')) {
      document.documentElement.classList.toggle('menu-open');
  }
}

//--------------------------------------------------

let countdownTime = 2 * 60 * 60; 
const timerElement = document.getElementById('timer');

function updateTimer() {
    const hours = Math.floor(countdownTime / 3600);
    const minutes = Math.floor((countdownTime % 3600) / 60);
    const seconds = countdownTime % 60;
    const formattedTime = 
        String(hours).padStart(2, '0') + ':' + 
        String(minutes).padStart(2, '0') + ':' + 
        String(seconds).padStart(2, '0');
    
    timerElement.textContent = formattedTime;
    countdownTime--;
    if (countdownTime < 0) {
        clearInterval(timerInterval);
        timerElement.textContent = "Time Out";
    }
}

//----------------------------------------------------
const timerInterval = setInterval(updateTimer, 1000);
updateTimer();

document.addEventListener("DOMContentLoaded", function() {
  const dateElement = document.getElementById('order-date');

  const currentDate = new Date();
  const day = String(currentDate.getDate()).padStart(2, '0');
  const month = String(currentDate.getMonth() + 1).padStart(2, '0');
  const year = currentDate.getFullYear();
  const formattedDate = `Order date: ${day}.${month}.${year}`;

  dateElement.textContent = formattedDate;
});

//------------------------------------------------------
window.addEventListener("DOMContentLoaded", function() {
  [].forEach.call( document.querySelectorAll('.tel'), function(input) {
    var keyCode;
    function mask(event) {
      event.keyCode && (keyCode = event.keyCode);
      var pos = this.selectionStart;
      if (pos < 3) event.preventDefault();
      var matrix = "+38(0__) ___ ____",
          i = 0,
          def = matrix.replace(/\D/g, ""),
          val = this.value.replace(/\D/g, ""),
          new_value = matrix.replace(/[_\d]/g, function(a) {
              return i < val.length ? val.charAt(i++) : a
          });
      i = new_value.indexOf("_");
      if (i != -1) {
          i < 5 && (i = 3);
          new_value = new_value.slice(0, i)
      }
      var reg = matrix.substr(0, this.value.length).replace(/_+/g,
          function(a) {
              return "\\d{1," + a.length + "}"
          }).replace(/[+()]/g, "\\$&");
      reg = new RegExp("^" + reg + "$");
      if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) {
        this.value = new_value;
      }
      if (event.type == "blur" && this.value.length < 5) {
        this.value = "";
      }
    }
    input.addEventListener("input", mask, false);
    input.addEventListener("focus", mask, false);
    input.addEventListener("blur", mask, false);
    input.addEventListener("keydown", mask, false);
  });
});
