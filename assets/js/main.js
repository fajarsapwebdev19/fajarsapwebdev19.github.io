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

$(".navbar-brand, .nav-link").on("click", function() {
  $('.navbar-collapse').collapse('hide');
  $('.nav-link').removeClass("active");
  $(this).addClass("active");
})


const txtElement = ['Saya Adalah Seorang Operator Sekolah', 'Saya Adalah Seorang Freelancer Web Development', 'Saya Adalah Seorang Mahasiswa'];
let count = 0;
let txtIndex = 0;
let currentTxt = '';
let words = '';

(function ngetik(){
    if(count == txtElement.length){
        count = 0;
    }

    currentTxt = txtElement[count];

    words = currentTxt.slice(0, ++txtIndex);
    document.querySelector('.tulisan-mengetik').textContent = words;

    if(words.length == currentTxt.length){
        count++;
        txtIndex = 0
    }

    setTimeout(ngetik, 190);
})();

