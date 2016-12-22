$(window).scroll(function (event) {
  var st = $(window).scrollTop();

  if (st > 100) {
    $('.header').addClass('header-scrolled');
  } else {
    $('.header').removeClass('header-scrolled');
  }
});

window.toggleMenu = function() {
  $('.menu-col').toggleClass('open');
  $('.body-shield').toggleClass('open');
  $('html').toggleClass('lock');
};