$(document).ready(function() {});

$(window).on("scroll", function() {
  var height = $(window).height();
  var double = height * 2;
  if ($(window).scrollTop() >= $(window).height()) {
    $(".hem").addClass("header-dark");
  } else {
    //remove the background property so it comes transparent again (defined in your css)
    $(".hem").removeClass("header-dark");
  }

  if ($(window).scrollTop() >= double) {
    $(".hem").removeClass("header-dark");
  }
});
