jQuery(document).ready(function($){
	//if you change this breakpoint in the style.css file (or _layout.scss if you use SASS), don't forget to update this value as well

	// fix for safari ios bug not dealing with vh correctly.
    $('.fullscreen').css('height', $(window).outerHeight());
    
	var MQL = 1170;

	//primary navigation slide-in effect
	if($(window).width() > MQL) {
		var headerHeight = $('.bh-header').height();
		$(window).on('scroll',
		{
	        previousTop: 0
	    }, 
	    function () {
		    var currentTop = $(window).scrollTop();
		    //check if user is scrolling up
		    if (currentTop < this.previousTop ) {
		    	//if scrolling up...
		    	if (currentTop > 0 && $('.bh-header').hasClass('is-fixed')) {
		    		$('.bh-header').addClass('is-visible');
		    	} else {
		    		$('.bh-header').removeClass('is-visible is-fixed');
		    	}
		    } else {
		    	//if scrolling down...
		    	$('.bh-header').removeClass('is-visible');
		    	if( currentTop > headerHeight && !$('.bh-header').hasClass('is-fixed')) $('.bh-header').addClass('is-fixed');
		    }
		    this.previousTop = currentTop;
		});
	}

	//open/close primary navigation
	$('.bh-primary-nav-trigger').on('click', function(){
		$('.bh-menu-icon').toggleClass('is-clicked'); 
		$('.bh-header').toggleClass('menu-is-open');
		
		//in firefox transitions break when parent overflow is changed, so we need to wait for the end of the trasition to give the body an overflow hidden
		if( $('.bh-primary-nav').hasClass('is-visible') ) {
			$('.bh-primary-nav').removeClass('is-visible').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',function(){
				$('body').removeClass('overflow-hidden');
			});
		} else {
			$('.bh-primary-nav').addClass('is-visible').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',function(){
				$('body').addClass('overflow-hidden');
			});	
		}
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

  //--------------------------------------------//
  // form js
  //--------------------------------------------//

  if( $('.floating-labels').length > 0 ) floatLabels();

  function floatLabels() {
    var inputFields = $('.floating-labels .bh-label').next();
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
    ( inputField.val() == '' ) ? inputField.prev('.bh-label').removeClass('float') : inputField.prev('.bh-label').addClass('float');
  }

  //--------------------------------------------//
  // back to top functionality
  //--------------------------------------------//

  // browser window scroll (in pixels) after which the "back to top" link is shown
	var offset = 300,
		//browser window scroll (in pixels) after which the "back to top" link opacity is reduced
		offset_opacity = 1200,
		//duration of the top scrolling animation (in ms)
		scroll_top_duration = 700,
		//grab the "back to top" link
		$back_to_top = $('.bh-top');

	//hide or show the "back to top" link
	$(window).scroll(function(){
		( $(this).scrollTop() > offset ) ? $back_to_top.addClass('bh-is-visible') : $back_to_top.removeClass('bh-is-visible bh-fade-out');
		if( $(this).scrollTop() > offset_opacity ) { 
			$back_to_top.addClass('bh-fade-out');
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

	//--------------------------------------------//
  // modal js
  //--------------------------------------------//

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

	//--------------------------------------------//
  // SLIDING PANEL
  //--------------------------------------------//

  $(document).ready(function(){
  $('.sliding-panel-button,.sliding-panel-fade-screen,.sliding-panel-close').on('click touchstart',function (e) {
    $('.sliding-panel-content,.sliding-panel-fade-screen').toggleClass('is-visible');
    e.preventDefault();
  });
});







});
