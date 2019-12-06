$(document).ready(function () {
  $(window).scroll(function () {
    return $('.nav').toggleClass("fixed", $(window).scrollTop() > $('.contact-top').height());
  });
  $('#select_from').ddslick({
    defaultSelectedIndex: 0
  });
  $('#select_to').ddslick({
    defaultSelectedIndex: 0
  });

  $('.reviews-carousel').owlCarousel({
    loop: true,
    margin: 0,
    nav: false,
    responsive: {
      0: {
        items: 1
      }
    }
  })

    $('.scroll').click(function (e) {
    event.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;

    $('body,html').animate({
      scrollTop: top - 40
    }, 1500);

  });

    $('.scroll-top').click(function (e) {
    event.preventDefault();
    var id = $('.contact-top'),
      top = $(id).offset().top;

    $('body,html').animate({
      scrollTop: top - 40
    }, 1500);

  });

    $('#nav-icon').click(function () {
    $(this).toggleClass('open');
    $(this).parents('nav').toggleClass('open');
    $('.menu').slideToggle(200);
  });
});