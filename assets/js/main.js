$(function () {
  $(".thumbnail").viewbox();
  $(".thumbnail-2").viewbox({ fullscreenButton: true });

  (function () {
    var vb = $(".popup-link").viewbox();
    $(".popup-open-button").click(function () {
      vb.trigger("viewbox.open");
    });
    $(".close-button").click(function () {
      vb.trigger("viewbox.close");
    });
  })();
});

$(".navbar-brand, .nav-link").on("click", function () {
  $('.navbar-collapse').collapse('hide');
  $('.nav-link').removeClass("active");
  $(this).addClass("active");
})


const txtElement = ['Freelancer Web Developer'];
let count = 0;
let txtIndex = 0;
let currentTxt = '';
let words = '';

(function ngetik() {
  if (count == txtElement.length) {
    count = 0;
  }

  currentTxt = txtElement[count];

  words = currentTxt.slice(0, ++txtIndex);
  document.querySelector('.tulisan-mengetik').textContent = words;

  if (words.length == currentTxt.length) {
    count++;
    txtIndex = 0
  }

  setTimeout(ngetik, 100);
})();

AOS.init();

document.addEventListener('DOMContentLoaded', function () {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

  function activateMenu() {
    let currentSection = '';

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (pageYOffset >= sectionTop - 50 && pageYOffset < sectionTop + sectionHeight - 50) {
        currentSection = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href').substring(1) === currentSection) {
        link.classList.add('active');
      }
    });
  }

  window.addEventListener('scroll', activateMenu);
  activateMenu(); // Activate on page load
});

