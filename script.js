document.addEventListener('DOMContentLoaded', function () {
  var navLinks = document.querySelectorAll('header section article');

  navLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      // Remove 'active' class from all links
      navLinks.forEach(function (navLink) {
        navLink.classList.remove('active');
      });

      // Add 'active' class to the clicked link
      link.classList.add('active');

      // Get the text content of the clicked link and display it
      var text = link.querySelectorAll('header section article span:last-child').textContent;
      document.querySelectorAll('.Title-Nav').textContent = text;
    });
  });

  // Toggle dark mode
  const darkModeButton = document.querySelector('.dark');
  const darkModeButton2 = document.querySelector('.light');
  const body = document.querySelector('body');

  darkModeButton.addEventListener('click', function () {
    body.classList.toggle('dark-mode');
    darkModeButton.style.display = "none";
    darkModeButton2.style.display = "block";
  });

  darkModeButton2.addEventListener('click', function () {
    body.classList.toggle('dark-mode');
    darkModeButton.style.display = "block";
    darkModeButton2.style.display = "none";
  });
});
