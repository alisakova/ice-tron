$(document).ready(function(){
  if ($('.news-slider').length) {
    $('.news-slider').slick({
      infinite: true,
      arrows: true,
      autoplay: true,
    });
  }
});
