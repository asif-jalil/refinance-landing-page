(function ($) {

  "use strict";

  // stycky navbar
  $(window).on('scroll', function () {
    var scroll = $(window).scrollTop()
    if (scroll > 10) {
      $("header").css("top", "-100%");
    } else {
      $("header").css("top", "0");
    }

    if (scroll > 500) {
      $("header").css("top", "0");
      $('header').addClass('sticky-state');
    } else {
      $('header').removeClass('sticky-state');
    }
  })

  //scrollspy
  var spy = new Gumshoe('.menu-item a');

  //active nav item
  $('.menu-item').click(function () {
    $('.menu-item').removeClass("active");
    $(this).addClass("active");
  });

  //wow js
  new WOW().init();

  //active mobile menu
  $('.menu-trigger').click(function () {
    $('.main-nav').toggleClass("active");
    $('.overlay').toggleClass("active");
  });

  $('.overlay').click(function () {
    $('.main-nav').removeClass("active");
    $(this).removeClass("active");
  });










})(jQuery);