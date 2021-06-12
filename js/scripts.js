/*!
    * Start Bootstrap - Creative v6.0.4 (https://startbootstrap.com/theme/creative)
    * Copyright 2013-2020 Start Bootstrap
    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-creative/blob/master/LICENSE)
    */
(function ($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 72)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Removed collapsing navbar because I couldn't get it to work as a dynamically loading 
  // navbar across multiple pages. Kept the code here in case we want to use it again. 

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function () {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll    
  $('body').scrollspy({
    target: '#mainNav',
    offset: 75
  });

  // Daman doesn't like the effect where the navbar is transparent until you 
  // scroll and then it becomes white. But I think the following commented out 
  // code may be helpful in hiding auto-hiding the dropdown on a mobile device
  // so I've kept it here until we are ready to address that.

  // Collapse Navbar
//   var navbarCollapse = function () {
//     if ($("#mainNav").offset().top > 100) {
//       $("#mainNav").addClass("navbar-scrolled");
//     } else {
//       $("#mainNav").removeClass("navbar-scrolled");
//     }
//   };

//  // Collapse now if page is not at top  
//   navbarCollapse();  

//   var navbarCollapse; 
//   $(document).ready (function () {    
//       navbarCollapse = function () { 
//       if ($("#mainNav").offset().top > 100) {
//         $("#mainNav").addClass("navbar-scrolled");
//       } else {
//         $("#mainNav").removeClass("navbar-scrolled");
//       }
//     }

//     $(window).scroll(navbarCollapse);
//   });


//   // Collapse the navbar when page is scrolled
//   $(window).scroll(navbarCollapse);

  // Magnific popup calls
  $('#portfolio').magnificPopup({
    delegate: 'a',
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    mainClass: 'mfp-img-mobile',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0, 1]
    },
    image: {
      tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
    }
  });



})(jQuery); // End of use strict
