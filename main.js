$(document).ready(function(){

  // ******************* NAVBAR STICKY ON SCROLL UP *******************
  
      var previousScroll = 0;
    
      $(window).scroll(function(){
    
        var currentScroll = $(this).scrollTop();
    
        /*
          If the current scroll position is greater than 0 (the top) AND the current scroll position is less than the document height minus the window height (the bottom) run the navigation if/else statement.
        */
        if (currentScroll > 0 && currentScroll < $(document).height() - $(window).height()){
          /*
            If the current scroll is greater than the previous scroll (i.e we're scrolling down the page), hide the nav.
          */
          if (currentScroll > previousScroll){
            window.setTimeout(hideNav, 300);
          /*
            Else we are scrolling up (i.e the previous scroll is greater than the current scroll), so show the nav.
          */
          } else {
            window.setTimeout(showNav, 300);
          }
          /* 
            Set the previous scroll value equal to the current scroll.
          */
          previousScroll = currentScroll;
        }
    
      });
    
      function hideNav() {
        $("[data-nav-status='toggle']").removeClass("is-visible").addClass("is-hidden");
      }
      function showNav() {
        $("[data-nav-status='toggle']").removeClass("is-hidden").addClass("is-visible");
      }


      // AUTO SCROLL ON CARD

      // $(".card-box").focus(function() {
      //   cardScroll = $(".card-box");
      //   console.log(cardScroll.position());
      //   cardScroll.scrollTop();
      // });

      // $(".card-box").click(function() {
      //   $('html, body').animate({
      //       scrollTop: $(this).offset().top
      //   }, 500);
      // });

    });
    
    // ******************* AUTO SCROLL ON CARD *******************
    
    // var cards = document.querySelectorAll('.card-box');

    // cards.forEach(function (card) {
    //     card.addEventListener('focus', function () {
    //         var rect = card.getBoundingClientRect();

    //         var y = rect.top - (rect.height + 60) + window.scrollY;

    //         window.scroll({
    //             top: y,
    //             behavior: 'smooth'
    //         });
    //     });
    // });