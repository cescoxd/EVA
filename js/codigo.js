function language() {
    var idioma = document.getElementById('language').value
    if (idioma == 'ES') {
        window.location.href = '../index.html'
    } else {
        window.location.href = './ca/index.html'
    }
}

window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}