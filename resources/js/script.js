$(document).ready(function() {

/*----------------------------STICKY NAV--------------------------------*/
    
    $('.header').on('inview', function(event, isInView) {
      if (isInView) {
        $("nav").removeClass("sticky");
      } else {
        $("nav").addClass("sticky");
      }
    });
    
  
/*------------------------SECTION ANIMATIONS----------------------------*/
    
    $('.js--wp-1').one('inview', function(event, visible) {
      if (visible) {
        $(".js--wp-1").addClass("opacity");
        $(".js--wp-1").addClass("fadeIn");
      }
    });
    
     $('.js--wp-2').one('inview', function(event, visible) {
      if (visible) {
        $(".js--wp-2").addClass("opacity");
        $(".js--wp-2").addClass("fadeInUp");
      }
    });
    
     $('.js--wp-3').one('inview', function(event, visible) {
      if (visible) {
        $(".js--wp-3").addClass("opacity");
        $(".js--wp-3").addClass("fadeIn");
      }
    });
    
     $('.js--wp-4').one('inview', function(event, visible) {
      if (visible) {
        $(".js--wp-4").addClass("opacity");
        $(".js--wp-4").addClass("pulse");
      }
    });
    
/*------------------------MOBILE NAV----------------------------*/
    
    $('.js--nav--icon').click(function() {
        var nav = $('.js--main-nav');
        var icon = $('.js--nav--icon ion-icon')
        
        nav.slideToggle(200);
    }); 
    
    $( "#menu-icon" ).click(function() {
      $("#menu-icon").addClass("nav-icon-close");    
      $("#cross").removeClass("nav-icon-close");    
    });
    
    $( "#cross" ).click(function() {
      $("#cross").addClass("nav-icon-close");    
      $("#menu-icon").removeClass("nav-icon-close");    
    });
});


/*--------------------------SCROLL ANIMATION------------------------------*/

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});