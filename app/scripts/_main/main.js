$(window).on("scroll", function() {
  if( $(window).scrollTop() > 666 ) {
    $('#main-navigation')
    .removeClass('-stuck-to-hero')
    .addClass('-stuck-to-top')
  } else if( $(window).scrollTop() < 666 ) {
    $('#main-navigation')
    .removeClass('-stuck-to-top')
    .addClass('-stuck-to-hero')
  }
});

$('.mobile-menu-toggle').on("click", function() {
  $(this).toggleClass('-close');
  $('.nav-links').toggleClass('-expanded');
});