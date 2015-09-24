var  mn = $(".main-nav");
    mns = "main-nav-scrolled";
    hdr = $('header').height();

$(window).scroll(function() {
  if( $(this).scrollTop() > 90 ) {
    mn.addClass(mns);
  } else {
    mn.removeClass(mns);
  }
});