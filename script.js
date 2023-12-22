 // JavaScript to add 'active' class to the clicked navigation item
 document.addEventListener('DOMContentLoaded', function () {
    var navLinks = document.querySelectorAll('header section article');

    navLinks.forEach(function (link) {
      link.addEventListener('click', function () {
        navLinks.forEach(function (navLink) {
          navLink.classList.remove('active');
        });

        link.classList.add('active');
      });
    });
  });