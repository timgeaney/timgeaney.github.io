jQuery(document).ready(function($){
  
  // form Js

  if( $('.floating-labels').length > 0 ) floatLabels();

  function floatLabels() {
    var inputFields = $('.floating-labels .cd-label').next();
    inputFields.each(function(){
      var singleInput = $(this);
      //check if user is filling one of the form fields 
      checkVal(singleInput);
      singleInput.on('change keyup', function(){
        checkVal(singleInput);  
      });
    });
  }

  function checkVal(inputField) {
    ( inputField.val() == '' ) ? inputField.prev('.cd-label').removeClass('float') : inputField.prev('.cd-label').addClass('float');
  }

  // menu toggle for front of site home page

    var navTrigger = document.getElementsByClassName('nav-trigger')[0],
        body = document.getElementsByTagName('body')[0];

      navTrigger.addEventListener('click', toggleNavigation);

      function toggleNavigation(event) {
        event.preventDefault();
        body.classList.toggle('nav-open');
      }


  // Accordion function

  $('.js-accordion-trigger').bind('click', function(e){
    jQuery(this).parent().find('.submenu').slideToggle('fast');  // apply the toggle to the ul
    jQuery(this).parent().toggleClass('is-expanded');
    e.preventDefault();
  });

  

  // Modal Js

  $(function() {
    $("#modal-1").on("change", function() {
      if ($(this).is(":checked")) {
        $("body").addClass("modal-open");
      } else {
        $("body").removeClass("modal-open");
      }
    });

    $(".modal-fade-screen, .modal-close").on("click", function() {
      $(".modal-state:checked").prop("checked", false).change();
    });

    $(".modal-inner").on("click", function(e) {
      e.stopPropagation();
    });
  });

  //scroll single-project to top of window
  $('.scroll-btn').on('click', function(){
    $('html, body').animate({'scrollTop': 0 }, "slow"); 
  });

  // browser window scroll (in pixels) after which the "back to top" link is shown
  var offset = 300,
    //browser window scroll (in pixels) after which the "back to top" link opacity is reduced
    offset_opacity = 1200,
    //duration of the top scrolling animation (in ms)
    scroll_top_duration = 700,
    //grab the "back to top" link
    $back_to_top = $('.cd-top');

  //hide or show the "back to top" link
  $(window).scroll(function(){
    ( $(this).scrollTop() > offset ) ? $back_to_top.addClass('cd-is-visible') : $back_to_top.removeClass('cd-is-visible cd-fade-out');
    if( $(this).scrollTop() > offset_opacity ) { 
      $back_to_top.addClass('cd-fade-out');
    }
  });

  //smooth scroll to top
  $back_to_top.on('click', function(event){
    event.preventDefault();
    $('body,html').animate({
      scrollTop: 0 ,
      }, scroll_top_duration
    );
  });
  

});










