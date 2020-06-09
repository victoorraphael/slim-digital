var navbar = document.querySelector(".transparent");

window.onscroll = function () {
  const obj = document.getElementById("about");
  const rect = obj.getBoundingClientRect();


  if (rect.top <= 50) {
    if (navbar.classList.contains('transparent')) {
      navbar.classList.remove('transparent');
      navbar.classList.remove('navbar-dark');
      navbar.classList.add('navbar-light', 'bg-light');
    }
  } else {
    navbar.classList.add('transparent');
    navbar.classList.remove('navbar-light', 'bg-light');
    navbar.classList.add('navbar-dark');
  }

}

